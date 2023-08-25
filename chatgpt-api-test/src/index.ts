import { config } from "dotenv";
import { OpenAI } from "openai";
import { createInterface } from "readline";

config();

const env = process.env;

const readInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readInput = async (): Promise<string> =>
  new Promise((resolve) => {
    readInterface.question(`Chatへの質問を入力してください\n`, (input) => {
      readInterface.close();
      resolve(input);
    });
  });

const main = async () => {
  const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

  const inputText = await readInput();

  // api reference: https://platform.openai.com/docs/api-reference/chat/create
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: inputText,
      },
    ],
  });

  console.log(response.choices[0].message.content);
};

// メイン実行部分
(async function () {
  await main();
})();
