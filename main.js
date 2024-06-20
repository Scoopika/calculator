const express = require("express");
const math = require("mathjs");

const app = express();
app.use(express.json());

app.post("/calculate", async (req, res) => {
  const { expression } = req.body;
 
  const result = math.evaluate(expression);
  return res.json({ result });
})

app.listen();
