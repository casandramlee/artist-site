document.getElementById("year").textContent = new Date().getFullYear();
const money = (n) => new Intl.NumberFormat(undefined, { style:"currency", currency:"USD" }).format(n);

const worksEl = document.getElementById("works");
if(worksEl){
  worksEl.innerHTML = window.WORKS.map(p => `
    <article class="work">
      <a href="work.html?id=${encodeURIComponent(p.id)}">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </a>
      <div class="meta">
        <h2>${p.title}</h2>
        <p class="muted">${p.medium} · ${p.dimensions} · ${p.year}</p>
        <div class="pillrow">
          <span class="pill">${p.type === "original" ? "Original" : "Print"}</span>
          ${p.available ? `` : `<span class="pill sold">Sold</span>`}
        </div>

        <div class="actions">
          <a class="btn btn-ghost" href="work.html?id=${encodeURIComponent(p.id)}">View</a>
          ${
            p.available && p.checkoutUrl
              ? `<a class="btn" href="${p.checkoutUrl}" target="_blank" rel="noopener">Buy now</a>`
              : `<span class="muted">${p.available ? "Contact for purchase" : "Unavailable"}</span>`
          }
          <span class="muted" style="margin-left:auto">${money(p.price)}</span>
        </div>
      </div>
    </article>
  `).join("");
}