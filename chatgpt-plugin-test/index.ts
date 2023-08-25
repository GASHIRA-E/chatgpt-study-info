import path from "path";
import fs from "fs";

import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc, { Options } from "swagger-jsdoc";

import prefecturesRouter from "./router/prefecturesRouter";
import populationRouter from "./router/populationRouter";

const app = express();
const PORT = 3000;

const swaggerJSDocOptions: Options = {
  swaggerDefinition: {
    info: {
      title: "ChatGPT Plugin Test",
      version: "1.0.0",
    },
  },
  apis: ["./router/*.ts"],
};

const swaggerJson = swaggerJSDoc(swaggerJSDocOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静的ファイル返却
app.use(express.static(path.join(__dirname, "public")));

app.use("/prefectures", prefecturesRouter);
app.use("/population", populationRouter);

try {
  fs.writeFile("./public/openapi.json", JSON.stringify(swaggerJson), () => {
    app.listen(PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${PORT}`
      );
    });
  });
} catch (e) {
  console.error(e);
}
