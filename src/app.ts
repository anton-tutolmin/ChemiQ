import express from "express";

const PORT = 8080;

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`[SERVER]: server is running on http://localhost:${PORT}`);
});
