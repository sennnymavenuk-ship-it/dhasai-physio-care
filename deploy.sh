#!/bin/bash

# Use the message you type after the script name, or a default if none given
MSG=${1:-"Update site"}

echo "Staging changes..."
git add .

echo "Committing with message: $MSG"
git commit -m "$MSG"

echo "Pushing to GitHub..."
git push

echo "Done! Vercel will redeploy automatically if connected."