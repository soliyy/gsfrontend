
**importante**  
- perdemos alguns commits por conta de um erro de git

## Tecnologias Utilizadas
**Frontend**:
- Next.js (v14.2.13)
- React.js
- TypeScript
- CSS Modules

**Persistência Local**:
- `localStorage` para salvar configurações de usuário (intervalo de dados, notificações, etc.)

**Design**:
- Fontes do Google Fonts (Montserrat).
- Estilos responsivos com **CSS Modules**.

## Como Rodar o Projeto

### 1. Clone o repositório:
```bash
git clone https://github.com/soliyy/gsfrontend.git
cd gsfrontend
```

### 2. Instale as dependências:
```bash
npm install
```

### 3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

### 4. Acesse o projeto no navegador:
```
http://localhost:3000
```

## API
A aplicação integra uma API desenvolvida para fornecer dados relacionados ao consumo de energia. A API é responsável por:

1. **Endereço**:
   - A API está disponível na rota `/api/energy-consumption`.

2. **Endpoints**:
   - `GET /api/energy-consumption?range={intervalo}`:
     - **Parâmetros**:
       - `range`: Intervalo de tempo para o consumo (opções: `7d`, `30d`, `90d`).
     - **Resposta**:
       ```json
       {
         "totalConsumption": 5000,
         "peakDate": "2024-01-15",
         "averageConsumption": 166
       }
       ```

3. **Funcionalidades**:
   - Retorna dados simulados de consumo energético com base no intervalo solicitado.
   - Utilizado nas páginas `Analytics` e `Dashboard` para exibição dinâmica de informações.

4. **Tecnologias**:
   - Desenvolvida com `Next.js API Routes`.
   - Simulação de dados para testes.

## Equipe
- **Lucas Martins Soliman** RM: 558506
- **Lucas Henrique de Souza Santos** RM: 558241
- **Ryan Fernando Lucio da Silva** RM: 555924

## Deploy
O projeto foi implementado no **Vercel**. Acesse a versão final em: (https://gsfrontend-gamma.vercel.app/)
