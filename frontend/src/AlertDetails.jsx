import { Link } from 'react-router-dom'
import { useState } from 'react'
function AlertDetails() {
    const [treated, setTreated] = useState(false)
  return (
    <div className="alert-details-page">

      <div className="details-topbar">
        <div>
          <h1>Détails de l'alerte</h1>
          <p>Analyse détaillée de l'incident de sécurité</p>
        </div>

        <span className="details-status critical">
          Critique
        </span>
      </div>

      <div className="details-grid">

        <div className="details-card">

          <div className="details-card-header">
            <div>
              <h2>Tentative d'intrusion détectée</h2>
              <p>ALERT-2026-0001</p>
            </div>
          </div>

          <div className="details-section">
            <h3>Informations générales</h3>

            <div className="details-info-grid">

              <div>
                <span>Système concerné</span>
                <strong>Serveur WEB-01</strong>
              </div>

              <div>
                <span>Date de détection</span>
                <strong>07 septembre 2026, 10:42</strong>
              </div>

              <div>
                <span>Type de menace</span>
                <strong>Intrusion réseau</strong>
              </div>

              <div>
                <span>Adresse IP source</span>
                <strong>192.168.1.45</strong>
              </div>

              <div>
                <span>Protocole</span>
                <strong>HTTPS</strong>
              </div>

              <div>
                <span>Statut</span>
                <strong className="status-warning">
                  En attente
                </strong>
              </div>

            </div>
          </div>

          <div className="details-section">
            <h3>Description</h3>

            <p className="details-description">
              SOC-IA a détecté une tentative d'accès inhabituelle
              au serveur WEB-01. Le comportement observé présente
              plusieurs caractéristiques associées à une tentative
              d'intrusion.
            </p>
          </div>

        </div>

        <div className="details-card ai-analysis-card">

          <div className="ai-details-header">
            <div className="ai-icon">✦</div>

            <div>
              <h2>Analyse IA</h2>
              <p>SOC-IA Intelligence</p>
            </div>
          </div>

          <div className="ai-risk">
            <span>Niveau de risque</span>
            <strong>87%</strong>
          </div>

          <div className="progress">
            <div className="progress-bar risk-progress"></div>
          </div>

          <p className="ai-details-message">
            Cette alerte présente un risque élevé.
            Une intervention de l'analyste sécurité est recommandée.
          </p>

          <div className="recommendation">
            <strong>Recommandation IA</strong>

            <p>
              Vérifier l'adresse IP source et analyser les
              connexions récentes du serveur.
            </p>
          </div>

        </div>

      </div>

      <div className="details-actions">

       <Link to="/alertes" className="action-secondary">
  ← Retour aux alertes
</Link>

        <button
  className="action-danger"
  onClick={() => alert("La source 192.168.1.45 a été bloquée.")}
>
  Bloquer la source
</button>

        <button
  className="action-primary"
  onClick={() => setTreated(true)}
>
  {treated ? '✓ Alerte traitée' : '✓ Marquer comme traitée'}
</button>
      </div>

    </div>
  )
}

export default AlertDetails