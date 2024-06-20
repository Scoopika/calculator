import express from "express";
import { evaluate } from "mathjs";

const app = express();
app.use(express.json());

app.post("/calculate", async (req, res) => {
  const { expression } = req.body;
 
  const result: number = evaluate(expression);
  return res.json({ result });
})

app.listen();
