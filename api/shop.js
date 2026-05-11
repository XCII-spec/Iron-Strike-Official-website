let items = [
  { name: "VIP Pass", link: "https://www.roblox.com/game-pass/ID" }
];

export default function handler(req, res) {

  // GET boutique
  if (req.method === "GET") {
    return res.json(items);
  }

  // POST admin add
  if (req.method === "POST") {
    const { user, pass, name, link } = req.body;

    if (user !== "HACKER21" || pass !== "89304") {
      return res.status(403).json({ error: "NO ACCESS" });
    }

    items.push({ name, link });
    return res.json({ success: true });
  }

  res.status(405).end();
}
