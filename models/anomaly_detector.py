"""
Module de détection d'anomalies pour le SOC-IA.
Utilise Isolation Forest (scikit-learn) pour scorer le trafic réseau
et identifier les comportements suspects.
"""

import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import LabelEncoder


class AnomalyDetector:
    def __init__(self, contamination: float = 0.08):
        self.model = IsolationForest(
            contamination=contamination,
            random_state=42,
            n_estimators=200,
        )
        self.protocol_encoder = LabelEncoder()
        self.is_fitted = False

    def _prepare_features(self, df: pd.DataFrame, fit_encoder: bool = False):
        features = df.copy()
        if fit_encoder:
            features["protocol_enc"] = self.protocol_encoder.fit_transform(features["protocol"])
        else:
            features["protocol_enc"] = self.protocol_encoder.transform(features["protocol"])
        return features[["packet_size", "duration_ms", "protocol_enc"]]

    def fit(self, df: pd.DataFrame):
        X = self._prepare_features(df, fit_encoder=True)
        self.model.fit(X)
        self.is_fitted = True
        return self

    def predict(self, df: pd.DataFrame) -> pd.DataFrame:
        if not self.is_fitted:
            raise RuntimeError("Le modèle doit être entraîné avec .fit() avant .predict()")

        X = self._prepare_features(df, fit_encoder=False)
        result = df.copy()

        raw_pred = self.model.predict(X)
        result["predicted_anomaly"] = (raw_pred == -1).astype(int)

        raw_scores = self.model.score_samples(X)
        normalized = (raw_scores - raw_scores.min()) / (raw_scores.max() - raw_scores.min())
        result["threat_score"] = (100 * (1 - normalized)).round(1)

        return result

    def summary(self, result_df: pd.DataFrame) -> dict:
        total = len(result_df)
        detected = int(result_df["predicted_anomaly"].sum())
        return {
            "total_logs": total,
            "anomalies_detectees": detected,
            "taux_anomalie_pct": round(100 * detected / total, 2) if total else 0,
            "score_menace_moyen": round(result_df["threat_score"].mean(), 2),
        }


if __name__ == "__main__":
    df = pd.read_csv("data/network_logs.csv")

    detector = AnomalyDetector(contamination=0.08)
    detector.fit(df)
    result = detector.predict(df)

    print(detector.summary(result))
    result.to_csv("data/network_logs_analyzed.csv", index=False)
    print("Résultats sauvegardés -> data/network_logs_analyzed.csv")