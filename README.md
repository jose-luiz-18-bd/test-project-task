## 🚀 Funcionalidades

- 🔍 Busca por produtos na Amazon com base em uma palavra-chave
- 🖼️ Retorna título, nota, número de avaliações e imagem
- 🌐 API com suporte a CORS para consumir via frontend (ex: React, Angular, etc.)
- 🧪 Testável via Postman

---

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/jose-luiz-18-bd/test-project-task
cd test-project-task
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor backend:
```bash
bun run index.ts
```

4. Inicie o servidor frontend:
```bash
npm run dev
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

- HTML
- CSS
- JavaScript
- Bun
- Axios
- JSDOM
- TypeScript
- CORS

---

## 🧑‍💻 Autor

Desenvolvido por **José Luiz de Jesus Santos**  
📧 zeluizjsantos@gmail.com

