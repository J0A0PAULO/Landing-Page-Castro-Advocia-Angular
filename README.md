---

# 🚀 Landing Page Castro Advocacia

🔗 Deploy: [castro-advocacia-page.netlify.app](https://castro-advocacia-page.netlify.app)

Landing page institucional desenvolvida com Angular 20, focada em design moderno, responsividade e integração com API mock.

---

## 🎨 Design Original
Figma: [Ver Protótipo](https://www.figma.com/design/TMq10CmFmKkyvheXwrJmK6/castroAdvocacia-landpage?node-id=0-1&t=YA5iIaTlhESmX0He-1)

---

## 🎯 Sobre o Projeto
Landing page fictícia para o escritório "Castro Advocacia". O objetivo é demonstrar domínio em Angular, componentização moderna, integração HTTP, SCSS modular e fidelidade visual ao design do Figma.

Principais entregas:
- Layout institucional responsivo
- Formulário de contato funcional (mock API)
- Componentes standalone reutilizáveis
- Estilo e UX refinados

---

## 🚀 Tecnologias Utilizadas
- Angular 20 (Standalone Components)
- TypeScript
- SCSS modular
- HTML5
- CSS3 (Grid/Flexbox)
- Figma (Design System)
- json-server (API mock)

---

## ⚙️ Funcionalidades
✅ Formulário de contato integrado à API mock
✅ Layout institucional com seções: header, banner, sobre, casos resolvidos, contato, footer
✅ Componentes standalone e reutilizáveis
✅ Two-way data binding com ngModel
✅ Estilos modulares e responsivos

---

## 🎨 Layout & Especificações
Design fiel ao Figma, com:
- Paleta de cores institucional
- Tipografia moderna
- Layout grid para desktop e mobile
- Responsividade e acessibilidade


```scss
.container-conteudo {
  display: grid;
  grid-template-columns: repeat(2, minmax(720px, 678px));
  grid-template-rows: 637px;
  justify-content: center;
  gap: 250px;
}

@media (max-width: 780px) {
  .container-conteudo {
    grid-template-columns: repeat(1, 330px);
    grid-template-rows: 329px;
    gap: 30px;
  }
}
```

---

## 🏗️ Estrutura do Projeto
src/
├── app/
│   ├── contato/           # Formulário de contato
│   ├── header/            # Cabeçalho
│   ├── footer/            # Rodapé
│   ├── carrosel/          # Banner rotativo
│   ├── sobre-nos/         # Seção institucional
│   ├── casos-resolvidos/  # Cards de casos
│   ├── services/          # Service Angular + types
│   └── backend/           # email.json (mock API)
├── public/                # Assets públicos
└── styles.scss            # Estilos globais

---

## ⚡ Recursos Angular Modernos
- Standalone Components
- importProvidersFrom (HttpClient)
- FormsModule local
- SCSS modular

---

## 💡 Aprendizados
- Componentização moderna com Angular 20
- Integração HTTP com json-server
- Estruturação de SCSS por componente
- Fidelidade visual ao Figma
- Boas práticas de UX e acessibilidade

---

## 🛣️ Próximas Melhorias
- Adicionar responsividade avançada para mobile
- Implementar animações e microinterações
- Fazer deploy (Netlify/Vercel)
- Adicionar testes unitários

---

## 📱 Preview
🎨 Design Original: [Figma](https://www.figma.com/design/TMq10CmFmKkyvheXwrJmK6/castroAdvocacia-landpage?node-id=0-1&t=YA5iIaTlhESmX0He-1)

---

## 👨‍💻 Autor
João Paulo

LinkedIn: https://www.linkedin.com/in/jo%C3%A3o-paulo-dos-santos-moreira-b52b7b174/
GitHub: https://github.com/J0A0PAULO

---

## 🚀 Como Executar Localmente
```bash
# Instalar dependências
npm install

# Rodar mock API
npx json-server --watch src/app/backend/email.json --port 3000

# Rodar aplicação Angular
npm start

# Abrir no navegador
http://localhost:4200
```

## 📝 Licença e créditos
Projeto criado para fins de demonstração/portfólio. Imagens e textos são fictícios e usados apenas para demonstração.
