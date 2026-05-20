#!/bin/bash

set -e  

echo "🚀 Starting servers..."

echo "🌐 Starting frontend (serve on 5000)..."
npx serve -l 5000 2>&1 &
SERVE_PID=$!

echo "🗄️ Starting json-server (port 3000)..."
npx json-server --watch db.json --port 3000 --host 0.0.0.0 2>&1 &
API_PID=$!

handle_error() {
  echo "❌ Error detected. Stopping all services..."
  kill $SERVE_PID $API_PID 2>/dev/null
  exit 1
}

trap 'handle_error' ERR

wait $SERVE_PID $API_PID