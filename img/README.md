# 📸 Guia de Imagens para o Site

## Imagens Necessárias

Coloque os arquivos de imagem nesta pasta (`img/`) com os seguintes nomes:

### Produtos (600x600px, JPG ou WebP)
- `magnesio-produto.jpg` - Foto do frasco de Magnésio Glicinato
- `complexo-b-produto.jpg` - Foto do frasco de Complexo B
- `ashwagandha-produto.jpg` - Foto do frasco de Ashwagandha

### Testemunhos (120x120px, JPG)
- `avatar-marina.jpg` - Foto de mulher ~30 anos (ou usar gerador)
- `avatar-carlos.jpg` - Foto de homem ~40 anos (ou usar gerador)
- `avatar-patricia.jpg` - Foto de mulher ~25 anos (ou usar gerador)

## 🎨 Opções para Conseguir Imagens

### 1. Produtos Reais (MELHOR)
- Compre os produtos na Amazon
- Tire fotos profissionais com luz natural
- Fundo branco ou neutro
- Enquadramento centralizado

### 2. Imagens da Amazon
- Baixe imagens oficiais dos produtos
- Redimensione para 600x600px
- ATENÇÃO: Verificar direitos de uso

### 3. Geradores de Avatar (para testemunhos)
**Sites gratuitos:**
- [ThisPersonDoesNotExist.com](https://thispersondoesnotexist.com/) - Pessoas realistas por IA
- [Generated.photos](https://generated.photos/) - Avatares gratuitos
- [UI Faces](https://uifaces.co/) - Fotos de pessoas reais (Creative Commons)

### 4. Bancos de Imagens Gratuitos
**Para produtos genéricos:**
- [Unsplash.com](https://unsplash.com/) - Alta qualidade, uso livre
- [Pexels.com](https://pexels.com/) - Fotos e vídeos gratuitos
- [Pixabay.com](https://pixabay.com/) - Imagens sem direitos autorais

## 🔧 Ferramentas de Edição

### Redimensionar Imagens
- [Squoosh.app](https://squoosh.app/) - Redimensionar e comprimir online
- [TinyPNG.com](https://tinypng.com/) - Comprimir PNG/JPG
- GIMP (gratuito) - Editor completo
- Photoshop (pago) - Profissional

### Converter para WebP
```bash
# Linux/Mac (usando cwebp)
cwebp -q 80 imagem.jpg -o imagem.webp

# Online
https://cloudconvert.com/jpg-to-webp
```

## 📐 Especificações Técnicas

### Produtos
```
Dimensões: 600x600px
Formato: JPG (80% qualidade) ou WebP
Tamanho: < 100KB
Fundo: Branco ou transparente
```

### Avatares
```
Dimensões: 120x120px (círculo)
Formato: JPG (85% qualidade)
Tamanho: < 20KB
Estilo: Casual, amigável
```

## ⚠️ IMPORTANTE: Fallback Automático

**Se você NÃO adicionar as imagens:**
- ✅ O site funciona normalmente
- ✅ Placeholders SVG coloridos aparecem automaticamente
- ✅ Não quebra o layout
- ❌ Conversão será menor (imagens reais convertem 40% melhor)

## 🎯 Prioridade

1. **CRÍTICO:** `magnesio-produto.jpg` (produto mais vendido)
2. **IMPORTANTE:** `complexo-b-produto.jpg`, `ashwagandha-produto.jpg`
3. **RECOMENDADO:** Avatares dos testemunhos

## 📝 Checklist

- [ ] Magnesio Glicinato (600x600px)
- [ ] Complexo B (600x600px)
- [ ] Ashwagandha (600x600px)
- [ ] Avatar Marina (120x120px)
- [ ] Avatar Carlos (120x120px)
- [ ] Avatar Patrícia (120x120px)
- [ ] Todas imagens < 100KB
- [ ] Testado no site (sem erros 404)

## 💡 Dica Pro

**Para melhor conversão:**
- Use fotos REAIS dos produtos (não stock photos)
- Mostre selo Amazon/Prime nas embalagens
- Avatares diversos (representatividade)
- Imagens otimizadas (carregamento rápido)

---

**Dúvidas?** Veja o README.md principal para mais informações.
