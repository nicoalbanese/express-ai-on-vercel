// Use "type: module" in package.json to use ES modules
import express from "express";
import { streamText } from "ai";

const app = express();

app.use(express.json()); // Add this middleware

// Define your routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

app.post("/", async (req, res) => {
  const { prompt } = req.body;

  const result = streamText({
    model: "openai/gpt-5-mini",
    prompt,
  });

  result.pipeTextStreamToResponse(res);
});

// Export the Express app
export default app;
