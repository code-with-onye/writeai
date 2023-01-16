import type { NextApiRequest, NextApiResponse } from "next";

export default async function getApiKe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST" || "GET") {
    const { key } = req.body;
    
    if (!key) {
      res.status(404).send("api key is required");
    }

    try {
      res.status(200).json({
        apiKey: key,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err || "something went   wrong");
    }
  }
}

