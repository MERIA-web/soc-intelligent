# SOC-IA — Module Analyse IA (partie Hanane)

Module Python d'analyse de données de sécurité par intelligence artificielle, développé pour le projet de groupe SOC-IA. Ce module détecte les anomalies dans le trafic réseau et expose les résultats via une API pour le tableau de bord de l'équipe.

## Structure du projet

SOC-IA/
├── data/
│   ├── generate_sample_data.py   # génère des logs réseau simulés
│   ├── network_logs.csv          # données générées
│   └── network_logs_analyzed.csv # résultats de l'analyse
├── models/
│   └── anomaly_detector.py       # détection d'anomalies (Isolation Forest)
├── app/
│   └── api.py                    # API Flask exposant les résultats
├── venv/                         # environnement virtuel Python
└── requirements.txt

## Installation

python -m venv venv
venv\Scripts\activate
pip install flask pandas numpy scikit-learn flask-cors

## Utilisation

1. Générer les données de test : python data/generate_sample_data.py
2. Tester le modèle en local : python models/anomaly_detector.py
3. Lancer l'API pour le dashboard de l'équipe : python app/api.py

L'API tourne ensuite sur http://127.0.0.1:5000

## Endpoints API

- GET /api/analyse-ia/resume : Métriques globales (précision, anomalies détectées, score moyen)
- GET /api/analyse-ia/anomalies : Liste détaillée des anomalies détectées
- GET /api/analyse-ia/menaces-par-type : Répartition par type de menace (Malware, Phishing, DDoS...)
- GET /api/analyse-ia/timeline : Score de menace moyen dans le temps
- GET /api/analyse-ia/performance-modele : Score de performance par catégorie de menace

## Technologies utilisées

- Python 3 — langage principal
- Flask — API REST
- Pandas / NumPy — traitement des données
- scikit-learn (Isolation Forest) — détection d'anomalies par IA

## À faire ensuite

- Remplacer les données simulées par de vraies données réseau
- Connecter l'API au frontend de l'équipe
- Ajouter l'authentification si nécessaire
# soc-intelligent
Centre d'Opérations de Sécurité Intelligent -     Projet de fin de licence SSRI Cours Sonou Bénin
