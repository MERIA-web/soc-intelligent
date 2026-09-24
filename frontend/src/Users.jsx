import { useState } from 'react'
function Users() { 
   const [search, setSearch] = useState('')
const [showForm, setShowForm] = useState(false)

const [userName, setUserName] = useState("")
const [userEmail, setUserEmail] = useState("")
const [userRole, setUserRole] = useState("Administrateur")
const [userPassword, setUserPassword] = useState("")
const [selectedUser, setSelectedUser] = useState(null)
const [editingUser, setEditingUser] = useState(null)

const [users, setUsers] = useState([
    {
      name: "Admin SOC",
      email: "admin@soc-ia.com",
      role: "Administrateur",
      status: "Actif",
    },
    
    {
      name: "Analyste Sécurité",
      email: "analyste@soc-ia.com",
      role: "Analyste sécurité",
      status: "Actif",
    },
    {
      name: "Jean Dupont",
      email: "jean.dupont@soc-ia.com",
      role: "Analyste sécurité",
      status: "Actif",
    },
    {
      name: "Marie Koffi",
      email: "marie.koffi@soc-ia.com",
      role: "Analyste sécurité",
      status: "Inactif",
    },
  ])
  const addUser = () => {
  const newUser = {
    name: userName,
    email: userEmail,
    role: userRole,
    status: "Actif",
  }

  setUsers([...users, newUser])

  setUserName("")
  setUserEmail("")
  setUserRole("Administrateur")
  setUserPassword("")
  setShowForm(false)
}
const totalUsers = users.length

const activeUsers = users.filter(
  (user) => user.status === "Actif"
).length

const adminUsers = users.filter(
  (user) => user.role === "Administrateur"
).length

  return (
    <div className="users-page">

      <div className="users-topbar">
        <div>
          <h1>Utilisateurs</h1>
          <p>Gérez les utilisateurs et leurs accès au SOC-IA.</p>
        </div>

       <button
  className="add-user-button"
  onClick={() => setShowForm(true)}
>
  + Ajouter un utilisateur
</button>
      </div>

      <div className="users-stats">

  <div className="user-stat-card">
    <span>Total utilisateurs</span>
    <strong>{totalUsers}</strong>
  </div>

  <div className="user-stat-card">
    <span>Utilisateurs actifs</span>
    <strong>{activeUsers}</strong>
  </div>

  <div className="user-stat-card">
    <span>Administrateurs</span>
    <strong>{adminUsers}</strong>
  </div>

</div>
      {showForm && (
  <div className="user-form-card">
    <h2>Ajouter un utilisateur</h2>

    <div className="user-form">
      <input
  type="text"
  placeholder="Nom complet"
  value={userName}
  onChange={(e) => setUserName(e.target.value)}
/>

<input
  type="email"
  placeholder="Adresse email"
  value={userEmail}
  onChange={(e) => setUserEmail(e.target.value)}
/>

<select
  value={userRole}
  onChange={(e) => setUserRole(e.target.value)}
>
  <option>Administrateur</option>
  <option>Analyste sécurité</option>
</select>

<input
  type="password"
  placeholder="Mot de passe"
  value={userPassword}
  onChange={(e) => setUserPassword(e.target.value)}
/>
      <div className="user-form-actions">
        <button
          className="cancel-user-button"
          onClick={() => setShowForm(false)}
        >
          Annuler
        </button>

        <button
  className="save-user-button"
  onClick={addUser}
>
  Ajouter
</button>
      </div>
    </div>
  </div>
)}

      <div className="users-container">

        <div className="users-header">
          <div>
            <h2>Liste des utilisateurs</h2>
            <p>Utilisateurs enregistrés dans SOC-IA</p>
          </div>

          <input
  type="text"
  placeholder="Rechercher un utilisateur..."
  className="user-search"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
        </div>

        <div className="users-list">

          {users
  .filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  )
  .map((user, index) => (
            <div className="user-row" key={index}>

              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>

              <div className="user-info">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>

              <span className="user-role">
                {user.role}
              </span>

              <span
                className={`user-status ${
                  user.status === "Actif" ? "active" : "inactive"
                }`}
              >
                {user.status}
              </span>

              <div className="user-actions">
  <button
    className="user-action"
    onClick={() => setSelectedUser(user)}
  >
    Voir
  </button>

  <button
    className="user-action"
    onClick={() => setEditingUser(user)}
  >
    Modifier
  </button>

  <button
    className="user-action"
    onClick={() => {
      if (window.confirm(`Voulez-vous supprimer ${user.name} ?`)) {
        setUsers((currentUsers) =>
          currentUsers.filter(
            (currentUser) => currentUser !== user
          )
        )
      }
    }}
  >
    Supprimer
  </button>
</div>

            </div>
          ))}

        </div>

      </div>
{selectedUser && (
  <div className="profile-modal">
    <div className="profile-modal-content">
      <h2>Détails de l'utilisateur</h2>

      <p><strong>Nom complet :</strong> {selectedUser.name}</p>
      <p><strong>Adresse email :</strong> {selectedUser.email}</p>
      <p><strong>Rôle :</strong> {selectedUser.role}</p>
      <p><strong>Statut :</strong> {selectedUser.status}</p>

      <button onClick={() => setSelectedUser(null)}>
        Fermer
      </button>
    </div>
  </div>
)}

{editingUser && (
  <div className="profile-modal">
    <div className="profile-modal-content">
      <h2>Modifier l'utilisateur</h2>

      <label>Nom complet</label>
      <input
        type="text"
        value={editingUser.name}
        onChange={(e) =>
          setEditingUser({
            ...editingUser,
            name: e.target.value
          })
        }
      />

      <label>Adresse email</label>
      <input
        type="email"
        value={editingUser.email}
        onChange={(e) =>
          setEditingUser({
            ...editingUser,
            email: e.target.value
          })
        }
      />

      <label>Rôle</label>
      <select
        value={editingUser.role}
        onChange={(e) =>
          setEditingUser({
            ...editingUser,
            role: e.target.value
          })
        }
      >
        <option>Administrateur</option>
        <option>Analyste sécurité</option>
      </select>

      <div className="profile-actions">
        <button onClick={() => setEditingUser(null)}>
          Annuler
        </button>

        <button
  onClick={() => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.email === editingUser.email
          ? editingUser
          : user
      )
    )

    setEditingUser(null)
  }}
>
  Enregistrer
</button>
      </div>
    </div>
  </div>
)}

    </div>
  )
}

export default Users