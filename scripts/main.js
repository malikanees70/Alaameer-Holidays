async function loadPackages(){
  try {
    const res = await fetch('data/packages.json');
    const js = await res.json();
    const grid = document.getElementById('packages-grid');
    js.packages.forEach(p => {
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <div style="height:150px;display:flex;align-items:center;justify-content:center;background:#f2f6fa;border-radius:6px;margin-bottom:8px">
          <img src="${p.image}" alt="${p.title}" style="max-height:120px;max-width:100%"/>
        </div>
        <h4>${p.title} <small style="color:#666;font-weight:600"> — ${p.days} days</small></h4>
        <p>${p.short}</p>
        <p><strong>Price:</strong> ${p.price}</p>
        <details style="margin-top:8px"><summary>Itinerary</summary><ol>${p.itinerary.map(i=>`<li>${i}</li>`).join('')}</ol></details>
      `;
      grid.appendChild(el);
    });
  } catch(err){
    console.error('Failed to load packages', err);
  }
}
document.addEventListener('DOMContentLoaded', loadPackages);
