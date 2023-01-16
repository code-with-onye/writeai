// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function generateText(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body;
  try {
    const resp = await openai.createCompletion({
      prompt,
      model: "text-davinci-002",
      temperature: 0.5,
    });
    // console.log(resp.data.choices[0].text)
    res.status(200).json({
      message: resp.data.choices[0].text,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err || "something went wrong");
  }
}
