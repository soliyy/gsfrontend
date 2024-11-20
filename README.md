# Plataforma de Eficiência Energética para Indústrias

## Descrição do Projeto
Uma plataforma digital que utiliza inteligência artificial para analisar dados de consumo de energia em indústrias. O sistema identifica oportunidades de otimização 

## Funcionalidades
- **Dashboard**: Visualização geral do consumo de energia e insights relevantes.
- **Analytics**: Análise detalhada de consumo por período e categorias.
- **Configurações (Settings)**:
  - Ativar ou desativar notificações.
  - Escolher intervalo de dados (7, 30 ou 90 dias).
  - Selecionar data e hora (padrão no horário de Brasília - UTC-3).
  - Persistência de configurações no frontend com localStorage.
- **Membros da Equipe (Members)**:
  - Exibição de membros com links para GitHub e LinkedIn.

## Estrutura de Pastas
```
.
├── app/
│   ├── analytics/
│   │   ├── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   ├── members/
│   │   ├── page.tsx
│   ├── settings/
│   │   ├── page.tsx
│   │   ├── Settings.module.css
│   ├── layout.tsx
│   ├── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
├── public/
│   ├── imagens/
│       ├── [imagens dos membros e elementos estáticos]
├── README.md
```

## Tecnologias Utilizadas
**Frontend**:
- Next.js (v14.2.13)
- React.js
- TypeScript
- CSS Modules

**Persistência Local**:
- localStorage para salvar configurações.

**Design**:
- Fontes do Google Fonts (Montserrat).
- Estilos responsivos.

## Como Rodar o Projeto
1. Clone o repositório:
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd [NOME_DA_PASTA]
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4. Acesse no navegador:
    ```
    http://localhost:3000
    ```

## Equipe
- **[Lucas Martins Soliman RM:558506]**
- **[Lucas Henrique de Souza Santos RM558241]**
- **[Ryan Fernando Lucio da Silva RM555924]**


## Deploy
O projeto foi implementado no Vercel. Acesse a versão final em: https://seuprojeto.vercel.app
