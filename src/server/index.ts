import express from "express";
import { createServer as createViteServer } from "vite";
import surveyRouter from "./api/surveys";

async function startServer() {
  const app = express();
  const port = 5173;

  app.use(express.json()); // json 파싱 미들웨어 추가
  app.use("/api/surveys", surveyRouter);

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares); // vite 서버세팅 미들웨어 추가

  return app.listen(port); // 포트 감시
}

const server = await startServer(); // 서버 실행

// HMR 컨트롤
if (import.meta.hot) {
  import.meta.hot.on("vite:beforeFullReload", () => {
    server.close();
  });
  import.meta.hot.dispose(() => {
    server.close();
  });
}
