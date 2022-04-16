const express = require("express");
const axios = require("axios");

const app = express();

app.get("/itunes", async (request, response) => {
  const term = request.query.term || "wecrashed";

  const itunesResponse = await axios.get(
    `https://itunes.apple.com/search?term=${term}`
  );

  response.json(itunesResponse.data);
});

app.listen(8000);
