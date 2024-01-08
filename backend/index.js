const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kreative AI!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
