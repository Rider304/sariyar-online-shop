const products = window.SHOP_PRODUCTS || [];
const config = window.SHOP_CONFIG || {};
const grid = document.getElementById("productGrid");
const filters = document.getElementById("filters");
let active = "সব পণ্য";
const categories = ["সব পণ্য", ...new Set(products.map(p => p.category))];
function money(n){return "৳" + Number(n).toLocaleString("en-BD");}
function waLink(p){
  const number = (config.whatsappNumber || "").replace(/\D/g,"");
  const msg = `আসসালামু আলাইকুম, আমি ${p.name} অর্ডার করতে চাই। দাম: ${money(p.price)}। পণ্যের ID: ${p.id}`;
  return number.includes("X") || number.length < 11 ? `https://wa.me/?text=${encodeURIComponent(msg)}` : `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
function renderFilters(){
  filters.innerHTML = categories.map(c => `<button class="filter-btn ${c===active?'active':''}" type="button">${c}</button>`).join("");
  [...filters.children].forEach(btn => btn.addEventListener("click",()=>{active=btn.textContent;renderFilters();renderProducts();}));
}
function renderProducts(){
  const shown = active==="সব পণ্য" ? products : products.filter(p=>p.category===active);
  grid.innerHTML = shown.length ? shown.map(p=>`
    <article class="product-card">
      <div class="product-image">${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<span class="placeholder">${p.icon || "🛍️"}</span>`}</div>
      <div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><p>${p.description || ""}</p><div class="price">${money(p.price)}</div><a class="order-btn" href="${waLink(p)}" target="_blank" rel="noopener">WhatsApp-এ অর্ডার করুন →</a></div>
    </article>`).join("") : `<p class="empty">এখনো কোনো পণ্য যোগ করা হয়নি। শিগগিরই পণ্য আসছে।</p>`;
}
document.getElementById("contactBtn").href = waLink({id:"",name:"শপ সম্পর্কে জানতে চাই",price:0});
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
renderFilters();renderProducts();