#!/bin/sh
# À lancer depuis infrastructure/scripts/
# Sauvegarde la base PostgreSQL du conteneur soc_postgres.
# Usage : ./backup.sh

set -e

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="$(dirname "$0")/backups"
mkdir -p "$BACKUP_DIR"
FILENAME="soc_ia_backup_${TIMESTAMP}.sql"

docker exec soc_postgres pg_dump -U "${DB_USER}" "${DB_NAME}" > "${BACKUP_DIR}/${FILENAME}"

echo "Sauvegarde créée : ${BACKUP_DIR}/${FILENAME}"

# Garde uniquement les 7 dernières sauvegardes
ls -t "${BACKUP_DIR}"/soc_ia_backup_*.sql | tail -n +8 | xargs -r rm --
