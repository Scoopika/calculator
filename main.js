const express = require("express");
const math = require("mathjs");

const app = express();
app.use(express.json());

app.post("/calculate", (req, res) => {
  const { expression } = req.body;

  if (!expression) {
    return res.json({ result: "ERROR: Invalid expression" })
  }

  const result = math.evaluate(expression);
  return res.json({ result });
})

app.listen(8080);
