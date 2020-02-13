const express = require("express");
const app = express();

app.listen(80);

app.get("/*", function (req, res) {
  if (req.url == "news") {
    res.send(req.url + "hello world");
  } else {
    res.send(req.url + "nothing");
  }
});