import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {

  if (req.method === "GET") {
    let { data } = await supabase.from("shop_items").select("*");
    return res.json(data);
  }

  if (req.method === "POST") {
    const { token, name, link } = req.body;

    // ici tu vérifies token (JWT)
    const { error } = await supabase
      .from("shop_items")
      .insert([{ name, link }]);

    return res.json({ success: !error });
  }
}
