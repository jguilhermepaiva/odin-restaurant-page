#!/bin/bash

set -e

echo "📦 Gerando nova build com Webpack..."
npx webpack

echo "🌳 Adicionando worktree temporário para gh-pages..."
rm -rf temp-deploy
git worktree add temp-deploy gh-pages || git worktree add -B gh-pages temp-deploy origin/gh-pages

echo "🧹 Limpando conteúdo anterior da branch gh-pages..."
rm -rf temp-deploy/*

echo "📁 Copiando arquivos da pasta dist para o worktree..."
cp -r dist/* temp-deploy/

cd temp-deploy

echo "📤 Commitando e enviando para a branch gh-pages..."
git add .
git commit -m 'Deploy atualizado'
git push origin gh-pages

cd ..
echo "🧼 Limpando worktree temporário..."
git worktree remove temp-deploy

echo "✅ Deploy concluído com sucesso!"
