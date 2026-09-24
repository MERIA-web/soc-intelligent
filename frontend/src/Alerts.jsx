import { Link } from 'react-router-dom'
import { useState } from 'react'
function Alerts() {
    const [search, setSearch] = useState('')
    const [level, setLevel] = useState('Tous les niveaux')
    const [system, setSystem] = useState('Tous les systèmes')
  const alerts = [
    {
      title: "Tentative d'intrusion détectée",
      system: "Serveur WEB-01",
      time: "Il y a 5 min",
      level: "Critique",
      type: "critical",
    },
    {
      title: "Activité réseau inhabituelle",
      system: "Poste PC-024",
      time: "Il y a 18 min",
      level: "Élevée",
      type: "high",
    },
    {
      title: "Échecs d'authentification multiples",
      system: "Serveur DB-02",
      time: "Il y a 32 min",
      level: "Moyenne",
      type: "medium",
    },
    {
      title: "Scan réseau détecté",
      system: "Réseau interne",
      time: "Il y a 1 h",
      level: "Faible",
      type: "low",
    },
    {
      title: "Connexion depuis une adresse IP inconnue",
      system: "Serveur APP-01",
      time: "Il y a 2 h",
      level: "Élevée",
      type: "high",
    },
  ]

  return (
    <div className="alerts-page">

      <div className="alerts-topbar">
        <div>
          <h1>Alertes de sécurité</h1>
          <p>Surveillez et analysez les menaces détectées par SOC-IA.</p>
        </div>

        <button
  className="refresh-button"
  onClick={() => window.location.reload()}
>
  ↻ Actualiser
</button>
      </div>

      <div className="alerts-stats">

        <div className="alert-stat-card">
          <div className="alert-stat-icon blue">◈</div>
          <div>
            <span>Total des alertes</span>
            <strong>24</strong>
          </div>
        </div>

        <div className="alert-stat-card">
          <div className="alert-stat-icon red">⚠</div>
          <div>
            <span>Critiques</span>
            <strong>07</strong>
          </div>
        </div>

        <div className="alert-stat-card">
          <div className="alert-stat-icon orange">!</div>
          <div>
            <span>Élevées</span>
            <strong>08</strong>
          </div>
        </div>

        <div className="alert-stat-card">
          <div className="alert-stat-icon green">✓</div>
          <div>
            <span>Traitées</span>
            <strong>12</strong>
          </div>
        </div>

      </div>

      <div className="alerts-filters">

        <input
  type="text"
  placeholder="Rechercher une alerte..."
  className="alert-search"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

       <select
  className="alert-select"
  value={level}
  onChange={(e) => setLevel(e.target.value)}
>
          <option>Tous les niveaux</option>
          <option>Critique</option>
          <option>Élevée</option>
          <option>Moyenne</option>
          <option>Faible</option>
        </select>

        <select
  className="alert-select"
  value={system}
  onChange={(e) => setSystem(e.target.value)}
>
          <option>Tous les systèmes</option>
          <option>Serveur WEB-01</option>
          <option>Serveur DB-02</option>
          <option>Serveur APP-01</option>
        </select>

      </div>

      <div className="alerts-container">

        <div className="alerts-header">
          <div>
            <h2>Alertes détectées</h2>
            <p>Dernières activités de sécurité</p>
          </div>

          <span className="alerts-count">
  {alerts.filter((alert) =>
    (
      alert.title.toLowerCase().includes(search.toLowerCase()) ||
      alert.system.toLowerCase().includes(search.toLowerCase())
    ) &&
    (level === 'Tous les niveaux' || alert.level === level) &&
    (system === 'Tous les systèmes' || alert.system === system)
  ).length} alertes
</span>
        </div>

        <div className="alerts-list">

        {alerts
  .filter((alert) =>
    (
      alert.title.toLowerCase().includes(search.toLowerCase()) ||
      alert.system.toLowerCase().includes(search.toLowerCase())
    ) &&
    (level === 'Tous les niveaux' || alert.level === level) &&
    (system === 'Tous les systèmes' || alert.system === system)
  )
  .map((alert, index) => (
            <div className="alert-item" key={index}>

              <div className={`alert-status-dot ${alert.type}`}></div>

              <div className="alert-main-info">
                <strong>{alert.title}</strong>

                <div className="alert-details">
                  <span>{alert.system}</span>
                  <span>•</span>
                  <span>{alert.time}</span>
                </div>
              </div>

              <span className={`alert-level ${alert.type}`}>
                {alert.level}
              </span>

             <Link to={`/alertes/${index + 1}`} className="alert-action">
  Voir
</Link>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Alerts