from flask import Flask, render_template
from data_analysis import (
    charger_donnees, nettoyer_donnees, statistiques_generales,
    repartition_par_protocole, top_services_attaques, detecter_anomalies_simples
)

app = Flask(__name__)

CHEMIN_DONNEES = 'data/network_data.csv'


@app.route('/')
def dashboard():
    df = charger_donnees(CHEMIN_DONNEES)
    df = nettoyer_donnees(df)

    stats = statistiques_generales(df)
    protocoles = repartition_par_protocole(df)
    top_services = top_services_attaques(df)
    anomalies = detecter_anomalies_simples(df)

    return render_template(
        'dashboard.html',
        stats=stats,
        protocoles=protocoles,
        top_services=top_services,
        anomalies=anomalies
    )


if __name__ == '__main__':
    app.run(debug=True)