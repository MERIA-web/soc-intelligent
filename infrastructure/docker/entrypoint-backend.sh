#!/bin/sh
set -e

echo "Attente de PostgreSQL sur $DB_HOST:$DB_PORT..."
while ! nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 0.5
done
echo "PostgreSQL est prêt."

python manage.py migrate --noinput
python manage.py collectstatic --noinput || true

exec "$@"
