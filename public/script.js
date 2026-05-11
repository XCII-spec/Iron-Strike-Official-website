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

  async function loadTop3() {
  const res = await fetch("/api/leaderboard");
  const data = await res.json();

  const top3 = data.slice(0, 3);

  const box = document.getElementById("lbList");
  box.innerHTML = "";

  top3.forEach((p, i) => {
    box.innerHTML += `
      <div class="card top${i+1}">
        <h2>🏆 #${i + 1} ${p.username}</h2>
        <p>💀 Kills: ${p.kills}</p>
        <p>🏆 Wins: ${p.wins}</p>
        <p>⭐ Score: ${p.score}</p>
      </div>
    `;
  });
}

// refresh automatique
setInterval(loadTop3, 5000);
loadTop3();
}
