const express = require("express");
const app = express();
const cors = require("cors");
const formulas = require("./formulas.json");

app.use(cors());
app.use(express.static("public"));

app.get("/calculate", (req, res) => {
  const product = req.query.product;
  const quantity = parseInt(req.query.quantity) || 1;

  if (!formulas[product]) {
    return res.status(404).json({ error: "Product not found" });
  }

  const result = { components: formulas[product] };
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
