#!/bin/bash

# Script de Deploy EnergiaVital
# Automatiza o processo de commit e push para GitHub

echo "🚀 Script de Deploy EnergiaVital"
echo "================================"
echo ""

# Verificar se estamos em um repositório git
if [ ! -d .git ]; then
    echo "❌ Erro: Não é um repositório Git"
    echo "Execute primeiro: git init"
    exit 1
fi

# Verificar se há mudanças
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ Nenhuma mudança para fazer commit"
    exit 0
fi

# Mostrar mudanças
echo "📝 Mudanças detectadas:"
git status --short
echo ""

# Pedir mensagem de commit
read -p "💬 Mensagem do commit: " commit_msg

# Se vazio, usar mensagem padrão
if [ -z "$commit_msg" ]; then
    commit_msg="Atualização do site $(date +'%Y-%m-%d %H:%M')"
fi

echo ""
echo "📦 Fazendo commit..."
git add .
git commit -m "$commit_msg"

echo ""
echo "🚀 Enviando para GitHub..."
git push

echo ""
echo "✅ Deploy concluído!"
echo "🌐 Seu site será atualizado em 1-2 minutos"
echo ""
