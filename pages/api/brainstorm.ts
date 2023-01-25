import type { NextApiRequest, NextApiResponse } from "next";
import { Prompts } from "./config";

export default async function brainstorm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST" || "GET") {
    const { topic, language } = req.body;
    try {
      const prompt = `Brainstorm a list of innovative solutions for\n\n${topic}`;
      const resp = await Prompts({ prompt });
      res.status(200).json({
        apiKey: resp.data.choices[0].text,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err || "something went   wrong");
    }
  }
}
