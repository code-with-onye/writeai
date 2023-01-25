import type { NextApiRequest, NextApiResponse } from "next";
import { Prompts } from "../config";

export default async function productNameGen(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST" || "GET") {
    const { topic, language, tone, result, keywords } = req.body;
    try {
      const prompt = ` generate a unique name idea for the following product \n\n"${topic}"`;
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
