import { useState } from "react"
function Reports() {
  const [selectedReport, setSelectedReport] = useState(null)
  const [showGenerateForm, setShowGenerateForm] = useState(false)
  const [reportType, setReportType] = useState("Rapport de sécurité")
const [reportPeriod, setReportPeriod] = useState("")

 const [reports, setReports] = useState([
    {
      title: "Rapport de sécurité hebdomadaire",
      period: "01 - 07 septembre 2026",
      incidents: 42,
      treated: 35,
      risk: "Élevé",
    },
    {
      title: "Rapport des incidents réseau",
      period: "01 - 07 septembre 2026",
      incidents: 18,
      treated: 16,
      risk: "Moyen",
    },
    {
      title: "Rapport des activités suspectes",
      period: "01 - 07 septembre 2026",
      incidents: 27,
      treated: 21,
      risk: "Élevé",
    },
  ])
  const totalReports = reports.length
  const totalIncidents = reports.reduce(
  (total, report) => total + report.incidents,
  0
)
const totalTreated = reports.reduce(
  (total, report) => total + report.treated,
  0
)
const treatmentRate =
  totalIncidents === 0
    ? 0
    : ((totalTreated / totalIncidents) * 100).toFixed(1)
  return (
    <div className="reports-page">
      <div className="reports-topbar">
        <div>
          <h1>Rapports</h1>
          <p>Consultez les rapports et statistiques de sécurité du SOC-IA.</p>
        </div>

        <button
  className="generate-report-button"
  onClick={() => setShowGenerateForm(true)}
>
  + Générer un rapport
</button>
      </div>
      {showGenerateForm && (
        <div className="profile-modal">
          <div className="profile-modal-content">
            <h2>Générer un rapport</h2>

            <label>Type de rapport</label>
            <select
  value={reportType}
  onChange={(e) => setReportType(e.target.value)}
>
  <option>Rapport de sécurité</option>
  <option>Rapport des incidents réseau</option>
  <option>Rapport des activités suspectes</option>
</select>

            <label>Période</label>
            <input
  type="text"
  placeholder="Ex : 01 - 07 septembre 2026"
  value={reportPeriod}
  onChange={(e) => setReportPeriod(e.target.value)}
/>

            <div className="profile-actions">
              <button onClick={() => setShowGenerateForm(false)}>
                Annuler
              </button>

              <button
  onClick={() => {
    const newReport = {
  title: reportType,
  period: reportPeriod || "Période non précisée",
  incidents: 0,
  treated: 0,
  risk: "Moyen",
}

    setReports((currentReports) => [
      newReport,
      ...currentReports,
    ])

    setShowGenerateForm(false)
    alert("Rapport généré avec succès !")
  }}
>
  Générer
</button>
            </div>
          </div>
        </div>
      )}

      <div className="reports-stats">
        <div className="report-stat-card">
          <span>Rapports disponibles</span>
          <strong>{totalReports}</strong>
        </div>

        <div className="report-stat-card">
          <span>Incidents analysés</span>
          <strong>{totalIncidents}</strong>
        </div>

        <div className="report-stat-card">
          <span>Incidents traités</span>
          <strong>{totalTreated}</strong>
        </div>

        <div className="report-stat-card">
          <span>Taux de traitement</span>
          <span>Taux de traitement</span>
<strong>{treatmentRate}%</strong>
        </div>
      </div>

      <div className="reports-container">
        <div className="reports-header">
          <div>
            <h2>Rapports récents</h2>
            <p>Derniers rapports générés par le SOC-IA.</p>
          </div>
        </div>

        <div className="reports-list">
          {reports.map((report, index) => (
            <div className="report-row" key={index}>
              <div className="report-icon">▣</div>

              <div className="report-info">
                <strong>{report.title}</strong>
                <span>{report.period}</span>
              </div>

              <div className="report-number">
                <span>Incidents</span>
                <strong>{report.incidents}</strong>
              </div>

              <div className="report-number">
                <span>Traités</span>
                <strong>{report.treated}</strong>
              </div>

              <span
                className={`report-risk ${
                  report.risk === "Élevé" ? "high" : "medium"
                }`}
              >
                {report.risk}
              </span>

              <button
  className="report-action"
  onClick={() => setSelectedReport(report)}
>
  Voir
</button>
            </div>
          ))}
        </div>
      </div>
      {selectedReport && (
        <div className="profile-modal">
          <div className="profile-modal-content">
            <h2>Détails du rapport</h2>

            <p><strong>Rapport :</strong> {selectedReport.title}</p>
            <p><strong>Période :</strong> {selectedReport.period}</p>
            <p><strong>Incidents :</strong> {selectedReport.incidents}</p>
            <p><strong>Incidents traités :</strong> {selectedReport.treated}</p>
            <p><strong>Niveau de risque :</strong> {selectedReport.risk}</p>

            <button onClick={() => setSelectedReport(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reports