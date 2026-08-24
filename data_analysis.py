import pandas as pd
import numpy as np

def charger_donnees(chemin_fichier):
    """Charge le dataset de connexions réseau."""
    colonnes = [
        'duration', 'protocol_type', 'service', 'flag', 'src_bytes',
        'dst_bytes', 'count', 'srv_count', 'serror_rate', 'label'
    ]
    df = pd.read_csv(chemin_fichier, names=colonnes, header=None)
    return df


def nettoyer_donnees(df):
    """Nettoie et normalise les données."""
    df = df.dropna()
    df['label'] = df['label'].apply(lambda x: 'normal' if 'normal' in str(x) else 'attack')
    return df


def statistiques_generales(df):
    """Calcule des statistiques clés sur les connexions."""
    stats = {
        'total_connexions': len(df),
        'connexions_normales': int((df['label'] == 'normal').sum()),
        'connexions_attaques': int((df['label'] == 'attack').sum()),
        'taux_attaque': round((df['label'] == 'attack').mean() * 100, 2),
        'duree_moyenne': round(df['duration'].mean(), 2),
        'octets_source_moyen': round(df['src_bytes'].mean(), 2),
    }
    return stats


def repartition_par_protocole(df):
    """Répartition des connexions par type de protocole."""
    return df.groupby('protocol_type')['label'].value_counts().unstack(fill_value=0).to_dict()


def top_services_attaques(df, n=5):
    """Les services les plus ciblés par des attaques."""
    attaques = df[df['label'] == 'attack']
    return attaques['service'].value_counts().head(n).to_dict()


def detecter_anomalies_simples(df, seuil_octets=10000):
    """Détecte les connexions avec un volume d'octets anormalement élevé."""
    anomalies = df[df['src_bytes'] > seuil_octets]
    return anomalies[['protocol_type', 'service', 'src_bytes', 'label']].to_dict('records')