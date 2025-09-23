async function loadFeatured(){
  try{
    const res = await fetch('data/packages.json');
    const js = await res.json();
    const grid = document.getElementById('featured-grid');
    js.packages.slice(0,4).forEach(p=>{
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <div style="height:140px;display:flex;align-items:center;justify-content:center;background:#f2f6fa;border-radius:6px;margin-bottom:8px">
          <img src="${p.image}" alt="${p.title}" style="max-height:110px;max-width:100%"/>
        </div>
        <h4>${p.title}</h4>
        <p>${p.short}</p>
        <p><strong>${p.price}</strong></p>
      `;
      grid.appendChild(el);
    });
  }catch(e){console.error(e)}
}
document.addEventListener('DOMContentLoaded', loadFeatured);
