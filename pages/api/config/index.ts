import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

interface IPrompt {
  prompt?: string;
}

export const Prompts = ({ prompt }: IPrompt) => {
  return openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
};

export default openai;
