#!/bin/bash

# Deploy MkDocs to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."

# Install dependencies if needed
echo "📦 Installing dependencies..."
pip install -r requirements.txt

# Build and deploy
echo "🔨 Building and deploying..."
mkdocs gh-deploy --force

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://jumashafara.dataidea.org"