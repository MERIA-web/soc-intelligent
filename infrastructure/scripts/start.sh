#!/bin/sh
# À lancer depuis infrastructure/scripts/
# Démarre tout le projet SOC-IA en une seule commande.
# Usage : ./start.sh

set -e

cd "$(dirname "$0")/../docker"

if [ ! -f .env ]; then
  echo ".env introuvable, copie de .env.example vers .env..."
  cp .env.example .env
  echo "Pense à modifier les mots de passe dans .env avant de continuer."
fi

docker compose up -d --build

echo ""
echo "Services démarrés :"
echo "  Backend  -> http://localhost:8000"
echo "  IA       -> http://localhost:5000"
echo "  Kibana   -> http://localhost:5601"
echo ""
echo "Voir les logs : docker compose logs -f"
