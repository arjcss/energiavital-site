# 📘 Guia Completo de Deploy - EnergiaVital

## 🎯 Objetivo
Publicar seu site gratuitamente usando GitHub + Cloudflare Pages ou Netlify

---

## 📋 Pré-requisitos

- [ ] Conta GitHub (gratuita) → [github.com/signup](https://github.com/signup)
- [ ] Conta Cloudflare (gratuita) → [cloudflare.com/sign-up](https://cloudflare.com/sign-up)
- [ ] OU Conta Netlify (gratuita) → [netlify.com/signup](https://app.netlify.com/signup)
- [ ] Git instalado no seu computador

---

## 🚀 MÉTODO 1: GitHub + Cloudflare Pages (RECOMENDADO)

### Vantagens:
- ✅ CDN global ultra-rápido
- ✅ SSL gratuito automático
- ✅ Builds ilimitados
- ✅ Deploy em <2 minutos
- ✅ Domínio personalizado grátis

---

### PASSO 1: Preparar Arquivos Localmente

#### 1.1 Baixar o site otimizado
Você já tem a pasta `energiavital-otimizado/` com todos os arquivos.

#### 1.2 Instalar Git (se necessário)

**Windows:**
```bash
# Baixe e instale: https://git-scm.com/download/win
```

**Mac:**
```bash
# Abra Terminal e digite:
git --version
# Se não instalado, siga instruções que aparecerem
```

**Linux:**
```bash
sudo apt install git
```

#### 1.3 Verificar estrutura

```
energiavital-otimizado/
├── index.html          ✅
├── suplementos.html    ✅
├── css/style.css       ✅
├── js/main.js          ✅
├── img/                ⚠️ ADICIONE SUAS IMAGENS AQUI
├── README.md           ✅
└── .gitignore          ✅
```

---

### PASSO 2: Criar Repositório no GitHub

#### 2.1 Acessar GitHub

1. Vá para [github.com](https://github.com)
2. Faça login
3. Clique no botão **"New"** (canto superior direito, ícone +)

#### 2.2 Configurar Repositório

```
Repository name: energiavital-site
Description: Site EnergiaVital - Suplementos para Energia
☑ Public
☐ Add README (NÃO marcar, já temos)
☐ Add .gitignore (NÃO marcar, já temos)
```

4. Clique em **"Create repository"**

#### 2.3 Copiar URL do Repositório

Na página que abrir, copie a URL que aparece:
```
https://github.com/SEU_USUARIO/energiavital-site.git
```

---

### PASSO 3: Enviar Arquivos para GitHub

#### 3.1 Abrir Terminal na pasta do site

**Windows:**
- Navegue até `energiavital-otimizado`
- Clique com botão direito → "Git Bash Here"

**Mac/Linux:**
```bash
cd /caminho/para/energiavital-otimizado
```

#### 3.2 Inicializar Git e fazer primeiro commit

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Site EnergiaVital otimizado - versão inicial"

# Renomear branch para 'main'
git branch -M main

# Conectar ao repositório GitHub (SUBSTITUA PELA SUA URL)
git remote add origin https://github.com/SEU_USUARIO/energiavital-site.git

# Enviar para GitHub
git push -u origin main
```

**✅ Pronto!** Seus arquivos estão no GitHub.

---

### PASSO 4: Conectar ao Cloudflare Pages

#### 4.1 Acessar Cloudflare Pages

1. Vá para [dash.cloudflare.com](https://dash.cloudflare.com)
2. Faça login (ou crie conta grátis)
3. No menu lateral, clique em **"Workers & Pages"**
4. Clique em **"Create application"**
5. Aba **"Pages"** → clique em **"Connect to Git"**

#### 4.2 Conectar GitHub

1. Clique em **"Connect GitHub"**
2. Autorize Cloudflare no popup que abrir
3. Selecione **"Only select repositories"**
4. Escolha `energiavital-site`
5. Clique em **"Install & Authorize"**

#### 4.3 Configurar Build

```
Project name: energiavital-site
Production branch: main

Build settings:
  Framework preset: None
  Build command: (deixar vazio)
  Build output directory: /
  Root directory: /
```

6. Clique em **"Save and Deploy"**

#### 4.4 Aguardar Deploy

- ⏳ Deploy leva ~1-2 minutos
- ✅ Quando aparecer "Success", clique no link

**Seu site está no ar! 🎉**

URL será algo como:
```
https://energiavital-site.pages.dev
```

---

### PASSO 5: Configurar Domínio Personalizado (OPCIONAL)

#### 5.1 Comprar Domínio

Opções baratas:
- [Registro.br](https://registro.br) → R$ 40/ano (.br)
- [Namecheap](https://namecheap.com) → $8/ano (.com)
- [Hostinger](https://hostinger.com.br) → R$ 30/ano

#### 5.2 Adicionar ao Cloudflare

1. No projeto Cloudflare Pages, vá em **"Custom domains"**
2. Clique em **"Set up a custom domain"**
3. Digite seu domínio: `energiavital.com.br`
4. Siga instruções para configurar DNS

**Pronto! SSL automático ativado em ~24h.**

---

## 🔄 Atualizando o Site (Depois do Deploy)

### Sempre que fizer mudanças:

```bash
# 1. Editar arquivos localmente
# 2. Salvar alterações
# 3. No terminal:

git add .
git commit -m "Descrição da mudança (ex: Adicionei imagens dos produtos)"
git push

# Deploy automático acontece em 1-2 minutos!
```

---

## 🚀 MÉTODO 2: Netlify (Alternativa mais simples)

### OPÇÃO A: Drag & Drop (MAIS RÁPIDO)

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Faça login (ou crie conta grátis)
3. Arraste a pasta `energiavital-otimizado` para a área de drop
4. **Pronto!** Site no ar em 30 segundos

**URL:** `https://random-name.netlify.app`

### OPÇÃO B: Via GitHub (Deploy Contínuo)

1. Siga passos 1-3 do Método 1 (criar repo no GitHub)
2. No Netlify, clique **"New site from Git"**
3. Escolha **"GitHub"**
4. Selecione `energiavital-site`
5. Configurações:
   ```
   Build command: (vazio)
   Publish directory: /
   ```
6. Clique **"Deploy site"**

**✅ Deploy automático a cada push!**

---

## 🔧 Configurações Pós-Deploy

### 1. Substituir Links de Afiliados

**CRÍTICO:** Trocar todos `XXXXXX` nos arquivos HTML:

```html
<!-- ANTES -->
href="https://www.amazon.com.br/dp/XXXXXX?tag=energiavital-20"

<!-- DEPOIS -->
href="https://www.amazon.com.br/dp/B08K7F3Q5L?tag=seuidafiliado-20"
```

**Onde encontrar:**
- `index.html` (linha ~280, ~340)
- `suplementos.html` (linhas ~85, ~180, ~280, ~380)

### 2. Adicionar Google Analytics

Em `index.html` e `suplementos.html`, substituir:

```javascript
gtag('config', 'UA-XXXXXXXXX-X');
```

Por seu ID real (criar em [analytics.google.com](https://analytics.google.com))

### 3. Adicionar Imagens dos Produtos

Colocar na pasta `img/`:

```
magnesio-produto.jpg          # 600x600px
complexo-b-produto.jpg        # 600x600px
ashwagandha-produto.jpg       # 600x600px
avatar-marina.jpg             # 120x120px
avatar-carlos.jpg             # 120x120px
avatar-patricia.jpg           # 120x120px
```

Se não tiver imagens, o código usa placeholders SVG automaticamente.

---

## ✅ Checklist Final

Antes de divulgar o site:

- [ ] Site está online e acessível
- [ ] Todos os links de afiliados estão corretos
- [ ] Google Analytics está configurado
- [ ] Imagens foram adicionadas (ou placeholders funcionam)
- [ ] Quiz funciona (testar no site)
- [ ] Calculadora funciona (testar no site)
- [ ] Popup de saída aparece (mover mouse para fora)
- [ ] Mobile responsivo (testar no celular)
- [ ] Todos os botões funcionam
- [ ] Formulário de email funciona (testar)

---

## 🆘 Problemas Comuns

### "git command not found"
**Solução:** Instalar Git (ver Passo 1.2)

### "Permission denied" no push
**Solução:** 
```bash
# Configurar suas credenciais
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Usar GitHub token ao invés de senha
# Gerar em: https://github.com/settings/tokens
```

### "Site não carrega CSS/JS"
**Solução:** Verificar se caminhos estão corretos:
```html
<link rel="stylesheet" href="css/style.css">  ✅ correto
<link rel="stylesheet" href="/css/style.css"> ❌ barra inicial
```

### "Deploy failed" no Cloudflare
**Solução:** 
- Verificar se todos os arquivos estão no GitHub
- Build command deve estar vazio
- Output directory deve ser `/`

### "Links de afiliado não funcionam"
**Solução:** Verificar se há espaços ou quebras de linha no href:
```html
<!-- ❌ ERRADO -->
<a href="https://amazon.com.br/dp/
         XXXXXX?tag=...">

<!-- ✅ CORRETO -->
<a href="https://amazon.com.br/dp/XXXXXX?tag=...">
```

---

## 📊 Próximos Passos

1. **Semana 1:** Deploy básico funcionando
2. **Semana 2:** Adicionar imagens reais + links corretos
3. **Semana 3:** Testar conversão com primeiros visitantes
4. **Semana 4:** Analisar Google Analytics e otimizar

---

## 💡 Dicas Pro

### Performance
- Use WebP para imagens (menor tamanho)
- Ative compressão no Cloudflare (automático)
- Teste velocidade: [PageSpeed Insights](https://pagespeed.web.dev)

### SEO
- Submeta sitemap ao Google Search Console
- Crie backlinks de qualidade
- Publique 1 artigo novo por semana

### Conversão
- A/B teste headlines diferentes
- Monitore heatmaps (Hotjar grátis)
- Teste popup de saída com diferentes textos

---

## 📞 Precisa de Ajuda?

**Recursos úteis:**
- [Documentação Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Documentação Netlify](https://docs.netlify.com/)
- [GitHub Git Handbook](https://guides.github.com/introduction/git-handbook/)

---

**🎉 Parabéns! Seu site está pronto para gerar comissões!**

Agora é só divulgar e acompanhar os resultados. 🚀
