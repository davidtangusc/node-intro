const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();

app.get("/api/github", (request, response) => {
  const username = request.query.username;
  const file = `${username}.txt`;

  fs.readFile(file, "utf8", (error, data) => {
    if (error) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((gitHubResponse) => {
          const repoCount = gitHubResponse.data.public_repos;

          fs.writeFile(file, `${repoCount}`, (error) => {
            console.log("The file has been saved!");
          });

          response.json({
            repoCount: repoCount,
          });
        });
    } else {
      response.json({
        repoCount: Number(data),
      });
    }
  });
});

app.listen(8000);
