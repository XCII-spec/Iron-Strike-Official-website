import jwt from "jsonwebtoken";

const SECRET = "IRON_STRIKE_SECRET";

export default async function handler(req, res) {
  const { username, password } = req.body;

  // EXEMPLE SIMPLE (remplacé par Supabase ensuite)
  if (username === "HACKER21" && password === "89304") {
    const token = jwt.sign(
      { user: username, role: "admin" },
      SECRET,
      { expiresIn: "2h" }
    );

    return res.json({ token });
  }

  res.status(403).json({ error: "Invalid login" });
}
