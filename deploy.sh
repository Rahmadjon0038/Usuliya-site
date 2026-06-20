#!/usr/bin/env bash
set -euo pipefail

APP_NAME="astracode"
IMAGE_TAG="latest"
PORT="3000"
USE_COMPOSE="auto"

usage() {
  cat <<EOF
Usage: ./deploy.sh [--name NAME] [--tag TAG] [--port PORT] [--compose auto|yes|no]

Builds and runs the site in Docker. If docker compose is available, it will use
compose; otherwise it falls back to docker build/run with --restart unless-stopped.

Examples:
  ./deploy.sh
  ./deploy.sh --port 8080
  ./deploy.sh --name myapp --tag v1
  ./deploy.sh --compose yes
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --name)
      APP_NAME="${2:-}"; shift 2 ;;
    --tag)
      IMAGE_TAG="${2:-}"; shift 2 ;;
    --port)
      PORT="${2:-}"; shift 2 ;;
    --compose)
      USE_COMPOSE="${2:-}"; shift 2 ;;
    -h|--help)
      usage; exit 0 ;;
    *)
      echo "Unknown arg: $1" >&2
      usage
      exit 1 ;;
  esac
done

if [[ -z "$APP_NAME" || -z "$IMAGE_TAG" || -z "$PORT" ]]; then
  echo "Error: --name/--tag/--port cannot be empty" >&2
  exit 1
fi

if [[ "$USE_COMPOSE" != "auto" && "$USE_COMPOSE" != "yes" && "$USE_COMPOSE" != "no" ]]; then
  echo "Error: --compose must be one of auto, yes, no" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: docker not found. Install Docker first." >&2
  exit 1
fi

if [[ "$USE_COMPOSE" != "no" ]] && docker compose version >/dev/null 2>&1; then
  export APP_NAME IMAGE_TAG PORT
  echo ">> Deploying with docker compose"
  docker compose up -d --build
  echo ">> Done. Container status:"
  docker ps --filter "name=^/${APP_NAME}$"
  exit 0
fi

IMAGE="${APP_NAME}:${IMAGE_TAG}"
CONTAINER="${APP_NAME}"

echo ">> Building image: ${IMAGE}"
docker build -t "${IMAGE}" .

if docker ps -a --format '{{.Names}}' | grep -qx "${CONTAINER}"; then
  echo ">> Stopping existing container: ${CONTAINER}"
  docker rm -f "${CONTAINER}" >/dev/null
fi

echo ">> Starting container: ${CONTAINER} (port ${PORT} -> 3000)"
docker run -d \
  --name "${CONTAINER}" \
  --restart unless-stopped \
  -p "${PORT}:3000" \
  "${IMAGE}" >/dev/null

echo ">> Done. Container status:"
docker ps --filter "name=^/${CONTAINER}$"
