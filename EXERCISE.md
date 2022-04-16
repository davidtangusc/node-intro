# Exercise

Build a single API endpoint in [Express](https://expressjs.com/) that fetches and caches data from a GitHub API endpoint.

The endpoint you are going to build will be `GET /api/github?username=davidtangusc`, where the `username` query string parameter can be filled in with any GitHub username. When there is a request to this endpoint, use the `username` query string parameter to make a request to https://api.github.com/users/:username (e.g. https://api.github.com/users/davidtangusc) using [Axios](https://github.com/axios/axios). Extract out the `public_repos` property in the response and write it out to a file named after the requested username (e.g. `davidtangusc.txt`). Your endpoint should respond with JSON structured as follows, where `reposCount` contains the value from `public_repos`:

```json
{
  "repoCount": 121
}
```

Subsequent requests to this endpoint for the same username should read the repo count from the file instead of making a request to the GitHub API and should still respond with the response above.

## Tips

- In the [fs](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html) module, you only need to use the [writeFile()](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback) and [readFile()](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback) methods.
- When using `fs.readFile()`, if the file doesn't exist, the callback function will have an error.
- The data in the second argument of `fs.writeFile` must be a string.
