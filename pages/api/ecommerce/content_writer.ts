import type { NextApiRequest, NextApiResponse } from "next";
import { Prompts } from "../config";

export default async function contentWriter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST" || "GET") {
    const { topic, language, tone, result } = req.body;
    try {
      const prompt = ` Rewrite the following content to be more engaging and descriptive \n\n"${topic}"`;
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
