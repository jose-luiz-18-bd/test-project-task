import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import cors from 'cors';


const app = express();
const PORT = 3000;
const CORS_PORT = 5173;
const CORS_ORIGIN = `http://localhost:${CORS_PORT}`;

app.use(cors({ origin: CORS_ORIGIN }));

app.get('/api/scrape', async (req, res) => {
  const keyword = req.query.keyword?.toString();
  if (!keyword) return res.status(400).json({ error: 'Keyword é obrigatória' });

  try {
    const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;
    const { data: html } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const products: any[] = [];

    document.querySelectorAll('[data-asin]').forEach((el) => {
      const title = el.querySelector('h2 span')?.textContent?.trim();
      const rating = el.querySelector('.a-icon-alt')?.textContent?.trim();
      const reviews = el.querySelector('.a-size-base.s-underline-text')?.textContent?.trim();
      const img = el.querySelector('img')?.getAttribute('src');

      if (title) {
        products.push({ title, rating, reviews, img });
      }
    });

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar dados da Amazon' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
