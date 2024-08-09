import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Please make a POST request.",
    });
  }

  const contactData = JSON.parse(req.body);

  const { data, error } = await supabase
    .from("Contacts")
    .insert([contactData])
    .select();

  if (error)
    res.status(500).json({
      success: false,
      message: "Sorry, couldn't send your message. Please try again!",
    });

  res.status(200).json({
    success: true,
    message: "Thanks for your message. We will be in touch soon.",
  });
}
