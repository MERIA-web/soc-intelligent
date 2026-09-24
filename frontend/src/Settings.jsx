import { useState } from 'react'

function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [realtime, setRealtime] = useState(true)
  const [aiAnalysis, setAiAnalysis] = useState(true)

  return (
    <div className="settings-page">
      <div className="settings-topbar">
        <div>
          <h1>Paramètres</h1>
          <p>Configurez les préférences et le fonctionnement du SOC-IA.</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h2>Notifications</h2>
          <p>Gérez les notifications de sécurité.</p>

          <div className="setting-item">
            <div>
              <strong>Notifications de sécurité</strong>
              <span>Recevoir les alertes importantes.</span>
            </div>

            <button
              className={`toggle ${notifications ? 'active' : ''}`}
              onClick={() => setNotifications(!notifications)}
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="settings-card">
          <h2>Surveillance</h2>
          <p>Configurez la surveillance en temps réel.</p>

          <div className="setting-item">
            <div>
              <strong>Surveillance en temps réel</strong>
              <span>Recevoir les événements en temps réel.</span>
            </div>

            <button
              className={`toggle ${realtime ? 'active' : ''}`}
              onClick={() => setRealtime(!realtime)}
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="settings-card">
          <h2>Intelligence artificielle</h2>
          <p>Configurez les fonctions d'analyse IA.</p>

          <div className="setting-item">
            <div>
              <strong>Analyse automatique des alertes</strong>
              <span>Utiliser l'IA pour analyser les incidents.</span>
            </div>

            <button
              className={`toggle ${aiAnalysis ? 'active' : ''}`}
              onClick={() => setAiAnalysis(!aiAnalysis)}
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="settings-card">
          <h2>Système</h2>
          <p>Informations générales du SOC-IA.</p>

          <div className="system-info">
            <div>
              <span>Version</span>
              <strong>1.0.0</strong>
            </div>

            <div>
              <span>Statut</span>
              <strong className="system-online">Opérationnel</strong>
            </div>

            <div>
              <span>IA</span>
              <strong>Activée</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings