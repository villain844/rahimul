const produkContainer = document.getElementById('produk-container');
const audio = document.getElementById('clickSound');

// Atur background dari file dbbg.js
const activeBg = backgroundData.find(bg => bg.status === "aktif");
if (activeBg) {
  document.body.style.backgroundImage = `url(${activeBg.background})`;
}

// Tampilkan produk dari dbproduk.js
produkData.forEach(p => {
  const box = document.createElement('div');
  box.className = 'product';
  box.innerHTML = `
    <h3>${p.nama}</h3>
    <img src="${p.foto}" onclick="popupFoto('${p.foto}')" alt="${p.nama}">
    <p>${p.deskripsi}</p>
    <p><b>Harga:</b> ${p.harga}</p>
    <a href="https://wa.me/${p.wa}?text=${encodeURIComponent('Saya mau pesan ' + p.nama)}" target="_blank">
      <button class="order" onclick="audio.play()">Order Sekarang</button>
    </a>
  `;
  produkContainer.appendChild(box);
});

// Pop-up lihat foto
function popupFoto(src) {
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.8); display: flex;
    align-items: center; justify-content: center; z-index: 9999;
  `;
  popup.innerHTML = `
    <img src="${src}" style="max-width:90%; max-height:90%; border-radius:10px;">
    <span onclick="this.parentElement.remove()" style="
      position:absolute; top:20px; right:30px; color:white; cursor:pointer; font-size:30px;">×</span>
  `;
  document.body.appendChild(popup);
}
