const API = "/api/shop";

function show(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "shop") loadShop();
}

// 📦 charger boutique
async function loadShop() {
  let res = await fetch(API);
  let data = await res.json();

  let div = document.getElementById("shopItems");
  div.innerHTML = "";

  data.forEach(i => {
    div.innerHTML += `
      <div>
        <p>${i.name}</p>
        <a class="btn" target="_blank" href="${i.link}">Acheter</a>
      </div>
    `;
  });
}

// 🔐 ajouter item
async function addItem() {
  let res = await fetch(API, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      user: document.getElementById("user").value,
      pass: document.getElementById("pass").value,
      name: document.getElementById("name").value,
      link: document.getElementById("link").value
    })
  });

  loadShop();
}
