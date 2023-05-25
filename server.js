const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    birthName: "Sheya Bin Abraham",
    birthLocation: "London, England",
    age: 29,
  },
  "chance the rapper": {
    birthName: "Chancelor Bennett",
    birthLocation: "Chicago, Illinois",
    age: 29,
  },
  unknown: {
    birthName: "unknown",
    birthLocation: "unknown",
    age: 0,
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const rapperName = req.params.name.toLowerCase();

  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}`);
});
