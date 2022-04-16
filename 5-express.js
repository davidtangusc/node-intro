const express = require("express");
const axios = require("axios");

const app = express();

app.get("/itunes", (request, response) => {
  const term = request.query.term || "wecrashed";
  const promise = axios.get(`https://itunes.apple.com/search?term=${term}`);

  promise.then((itunesResponse) => {
    response.json(itunesResponse.data);
  });
});

app.listen(8000);
