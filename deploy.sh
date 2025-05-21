#!/bin/bash

set -e

echo "🔄 Mudando para a branch principal..."
git checkout main

echo "📦 Gerando nova build..."
npx webpack

echo "🧹 Apagando branch gh-pages remota (caso exista)..."
git push origin --delete gh-pages || true

echo "🚀 Publicando nova versão com git subtree..."
git subtree push --prefix dist origin gh-pages

echo "✅ Deploy finalizado!"
