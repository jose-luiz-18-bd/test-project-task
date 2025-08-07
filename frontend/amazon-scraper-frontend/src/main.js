document.getElementById('searchBtn').addEventListener('click', async () => {

  const keyword = document.getElementById('keyword').value;
  if (!keyword) return alert('Digite uma palavra-chave');

  try {
    const res = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    const data = await res.json();

    const results = document.getElementById('results');
    results.innerHTML = '';

    if (!data.length) {
      results.innerHTML = '<p>Nenhum resultado.</p>';
      return;
    }

    data.forEach(p => {
      const el = document.createElement('div');
      el.innerHTML = `
        <h3>${p.title}</h3>
        <p>⭐ ${p.rating || 'sem nota'} (${p.reviews || '0'} avaliações)</p>
        <img src="${p.img}" width="100" />
        <hr/>
      `;
      results.appendChild(el);
    });
  } catch (err) {
    console.error(err);
    alert('Erro ao buscar');
  }
});

