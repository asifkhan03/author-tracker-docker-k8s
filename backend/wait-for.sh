#!/bin/bash

# Wait until MySQL is available
until mysqladmin ping -h db -uappuser -plearnIT02# --silent; do
  echo "Waiting for MySQL..."
  sleep 2
done

# Now start the backend (Node.js, etc.)
echo "MySQL is ready. Starting backend..."
npm start
