import { app } from "./server/app";
import path from "path";
import { createServer as createViteServer } from "vite";
import express from "express";

const PORT = 3000;

// Serve Vite application
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Match route mapping rules
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Mithra Server] Premium Full-Stack Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();

