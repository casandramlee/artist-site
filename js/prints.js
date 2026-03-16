document.getElementById("year").textContent = new Date().getFullYear();

const money = (n) =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);

const el = document.getElementById("prints");
if (el) {
  const prints = (window.WORKS || [])
  .filter(w => w.type === "print")
  .sort((a,b) => (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title));

  el.innerHTML = prints
    .map(
     return `
  <article class="work-card">
    <a class="work-thumb" href="work.html?id=${work.id}" aria-label="View details for ${work.title}">
      <img src="${work.image}" alt="${work.title}" loading="lazy">
    </a>

    <div class="work-popout" aria-hidden="true">
      <div class="work-popout-inner">
        <img src="${work.image}" alt="${work.title}">
      </div>
    </div>

    <div class="work-card-body">
      <div class="work-title-row">
        <h3 class="work-title">${work.title}</h3>
        <span class="work-price">$${work.price}</span>
      </div>

      <p class="work-meta">
        ${work.year}${work.dimensions ? ` · ${work.dimensions}` : ""}
      </p>

      <div class="work-actions">
        <a href="work.html?id=${work.id}" class="btn">View Details</a>
        ${
          work.available && work.checkoutUrl
            ? `<a href="${work.checkoutUrl}" class="btn btn-primary" target="_blank" rel="noopener">Buy Print</a>`
            : `<span class="sold-out">Unavailable</span>`
        }
      </div>
    </div>
  </article>
`;