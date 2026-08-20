
## Services à conteneuriser

| Service | Port | Dossier source |
|---|---|---|
| Backend Django | 8000 | `backend/django/` |
| PostgreSQL | 5432 | (image officielle) |
| Module IA (Flask) | 5000 | `ia/app/` |
| Suricata / ELK | - | `security/` |

## Ce qui N'EST PAS dans ce dossier

- Pas de configuration Suricata/ELK elle-même (`security/`)
- Pas de code Django (`backend/django/`)
- Pas de code IA (`ia/`)

Ce dossier contient uniquement l'orchestration (Docker, scripts de déploiement).
