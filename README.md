# 📦 Amazon Scraper API

Esta aplicação é um backend simples feito em **Node.js + Express** que permite realizar scraping de produtos da **Amazon Brasil** com base em uma palavra-chave de busca.

---

## 🚀 Funcionalidades

- 🔍 Busca por produtos na Amazon com base em uma palavra-chave
- 🖼️ Retorna título, nota, número de avaliações e imagem
- 🌐 API com suporte a CORS para consumir via frontend (ex: React, Angular, etc.)
- 🧪 Testável via Postman

---

## 📁 Estrutura do Projeto

```
puppeteer-amazon-scraper/
├── index.ts        # Código principal da API
├── package.json    # Dependências e scripts
├── tsconfig.json   # Configuração do TypeScript
├── README.md       # Documentação
```

---

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/amazon-scraper-api.git
cd amazon-scraper-api
```

2. Instale as dependências:
```bash
npm install
```

3. Compile o TypeScript (se necessário):
```bash
npx tsc
```

4. Inicie o servidor:
```bash
npm start
```

---

## 🌐 Rota da API

### `GET /api/scrape`

Busca produtos da Amazon.

#### Parâmetros de query:
| Parâmetro | Tipo   | Obrigatório | Descrição                              |
|-----------|--------|-------------|----------------------------------------|
| `keyword` | string | ✅ Sim       | Palavra-chave para busca na Amazon     |

#### Exemplo:
```http
GET http://localhost:3000/api/scrape?keyword=livro
```

#### Resposta (JSON):
```json
[
  {
    "title": "O hobbit: A desolação de Smaug",
    "rating": "4,8 de 5 estrelas",
    "reviews": "12.341",
    "img": "https://m.media-amazon.com/images/I/81Q0A3Kq8ML._AC_UL320_.jpg"
  }
]
```

---

## 💡 Testar via Postman

- Método: **GET**
- URL: `http://localhost:3000/api/scrape?keyword=livro`
- Headers:
  - `Origin`: `http://localhost:5173` (ou o da sua aplicação frontend)

---

## 🧱 Tecnologias Utilizadas

- Node.js
- Express
- Axios
- JSDOM
- TypeScript
- CORS

---

## 🛠️ To-Do / Melhorias Futuras

- [ ] Paginação dos resultados
- [ ] Filtro por categoria ou avaliação
- [ ] Deploy na nuvem (Render, Vercel, etc.)
- [ ] Frontend de demonstração

---

## ⚠️ Aviso

Este projeto é apenas para fins educacionais. Scraping de sites como Amazon pode violar seus Termos de Uso.

---

## 🧑‍💻 Autor

Desenvolvido por **José Luiz Santos**  
📧 jose@example.com

---

## 📄 Licença

Este projeto está licenciado sob a MIT License.