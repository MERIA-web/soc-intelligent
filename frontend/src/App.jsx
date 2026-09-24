import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Alerts from './Alerts'
import AlertDetails from './AlertDetails'
import Users from './Users'
import Reports from './Reports'
import Settings from './Settings'
import { useState } from 'react'

function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [profileName, setProfileName] = useState("Admin SOC - IA")
const [profileEmail, setProfileEmail] = useState("admin@soc-ia.com")
const [profilePhone, setProfilePhone] = useState("")
const [profileRole, setProfileRole] = useState("Administrateur")
const [profilePassword, setProfilePassword] = useState("")
  return (
    <>
      <header className="topbar">
        <div>
          <h1>Tableau de bord</h1>
          <p>Vue globale de la sécurité de votre système</p>
        </div>

        <div className="topbar-actions">

  <button
    className="notification"
    onClick={() => setShowNotifications(!showNotifications)}
  >
    🔔
  </button>

  {showNotifications && (
    <div className="notification-panel">
      <strong>Notifications</strong>
      <p>🚨 Une alerte critique a été détectée.</p>
      <p>🤖 Nouvelle analyse IA disponible.</p>
      <p>✅ Système SOC-IA opérationnel.</p>
    </div>
  )}

  <div
  className="profile"
  onClick={() => setShowProfile(!showProfile)}
  style={{ cursor: 'pointer' }}
>
  <div className="avatar">A</div>

  <div>
    <strong>{profileName}</strong>
    <span>{profileRole}</span>
  </div>
</div>

  {showProfile && (
  <div className="profile-menu">

    <button onClick={() => setShowProfileModal(true)}>
      Mon profil
    </button>

    <button onClick={() => alert("Déconnexion effectuée.")}>
      Déconnexion
    </button>

  </div>
)}
 {showProfileModal && (
  <div className="profile-modal">
    <div className="profile-modal-content">
      <h2>Mon profil</h2>

      <label>Nom et prénom</label>
<input
  type="text"
  value={profileName}
  onChange={(e) => setProfileName(e.target.value)}
/>

<label>E-mail</label>
<input
  type="email"
  value={profileEmail}
  onChange={(e) => setProfileEmail(e.target.value)}
/>

<label>Téléphone</label>
<input
  type="tel"
  value={profilePhone}
  onChange={(e) => setProfilePhone(e.target.value)}
  placeholder="Votre numéro de téléphone"
/>

<label>Fonction / rôle</label>
<input
  type="text"
  value={profileRole}
  onChange={(e) => setProfileRole(e.target.value)}
/>

<label>Mot de passe</label>
<input
  type="password"
  value={profilePassword}
  onChange={(e) => setProfilePassword(e.target.value)}
  placeholder="Nouveau mot de passe"
/>

      <div className="profile-actions">
        <button onClick={() => setShowProfileModal(false)}>
          Fermer
        </button>

        <button
  onClick={() => {
    setShowProfileModal(false)
  }}
>
  Enregistrer
</button>
      </div>
    </div>
  </div>
)}


        </div>
        
      </header>

      <section className="stats-grid">
      <Link to="/alertes" className="stat-card">
  <div className="stat-icon blue">◆</div>
  <div>
    <span>Alertes actives</span>
    <strong>24</strong>
    <small>+8% cette semaine</small>
  </div>
</Link>

        <Link to="/alertes" className="stat-card">
  <div className="stat-icon red">⚠</div>
  <div>
    <span>Incidents critiques</span>
    <strong>07</strong>
    <small>3 nécessitent une action</small>
  </div>
</Link>

        <Link to="/parametres" className="stat-card">
  <div className="stat-icon green">✓</div>
  <div>
    <span>Systèmes protégés</span>
    <strong>156</strong>
    <small>Protection active</small>
  </div>
</Link>

      <Link to="/alertes" className="stat-card">
  <div className="stat-icon purple">◉</div>
  <div>
    <span>Menaces détectées</span>
    <strong>342</strong>
    <small>+12 aujourd'hui</small>
  </div>
</Link>
      </section>

      <section className="dashboard-grid">
        <div className="panel alerts-panel">
          <div className="panel-header">
            <div>
              <h2>Alertes récentes</h2>
              <p>Dernières menaces détectées</p>
            </div>

            <Link to="/alertes" className="view-all">
              Voir tout
            </Link>
          </div>

          <div className="alert-list">
           <Link to="/alertes/1" className="alert-row">
  <div className="alert-indicator critical"></div>

  <div className="alert-info">
    <strong>Tentative d'intrusion détectée</strong>
    <span>Serveur WEB-01 • Il y a 5 min</span>
  </div>

  <span className="badge critical-badge">Critique</span>
</Link>

            <Link to="/alertes/1" className="alert-row">
  <div className="alert-indicator high"></div>
  <div className="alert-info">
    <strong>Activité réseau inhabituelle</strong>
    <span>Poste PC-024 • Il y a 18 min</span>
  </div>
  <span className="badge high-badge">Élevée</span>
</Link>

           <Link to="/alertes/1" className="alert-row">
  <div className="alert-indicator medium"></div>
  <div className="alert-info">
    <strong>Échec d'authentification multiple</strong>
    <span>Serveur DB-02 • Il y a 32 min</span>
  </div>
  <span className="badge medium-badge">Moyenne</span>
</Link>
          </div>
        </div>

        <div className="panel ai-panel">
          <div className="ai-header">
            <div className="ai-icon">✦</div>
            <div>
              <h2>Analyse IA</h2>
              <p>SOC-IA Intelligence</p>
            </div>
          </div>

          <div className="ai-content">
            <div className="ai-score">
              <span>Score de sécurité</span>
              <strong>87<span>/100</span></strong>
            </div>

            <div className="progress">
              <div className="progress-bar"></div>
            </div>

            <p className="ai-message">
              Votre système présente un niveau de sécurité élevé.
              3 recommandations nécessitent votre attention.
            </p>

            <Link to="/alertes/1" className="ai-button">
  Voir l'analyse complète
</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <aside className="sidebar">
          <div className="logo">
            <div className="logo-icon">S</div>
            <div>
              <h2>SOC-IA</h2>
              <span>Security Center</span>
            </div>
          </div>

          <nav className="navigation">
            <p className="menu-title">MENU PRINCIPAL</p>

            <Link to="/" className="nav-item">
              <span>▣</span>
              Tableau de bord
            </Link>

            <Link to="/alertes" className="nav-item">
              <span>⚠</span>
              Alertes
            </Link>

            <Link to="/utilisateurs" className="nav-item">
  <span>◉</span>
  Utilisateurs
</Link>
<Link to="/rapports" className="nav-item">
  <span>▣</span>
  Rapports
</Link>
<Link to="/parametres" className="nav-item">
  <span>⚙</span>
  Paramètres
</Link>

          
          </nav>

          <div className="sidebar-bottom">
            <div className="status">
              <span className="status-dot"></span>
              Système opérationnel
            </div>
          </div>
        </aside>

        <main className="main-content">
        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/alertes" element={<Alerts />} />
  <Route path="/alertes/:id" element={<AlertDetails />} />
  <Route path="/utilisateurs" element={<Users />} />
  <Route path="/rapports" element={<Reports />} />
  <Route path="/parametres" element={<Settings />} />
</Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App