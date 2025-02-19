require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubdata = {
  login: "WaleedKhan94",
  id: 22634512,
  node_id: "MDQ6VXNlcjIyNjM0NTEy",
  avatar_url: "https://avatars.githubusercontent.com/u/22634512?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/WaleedKhan94",
  html_url: "https://github.com/WaleedKhan94",
  followers_url: "https://api.github.com/users/WaleedKhan94/followers",
  following_url:
    "https://api.github.com/users/WaleedKhan94/following{/other_user}",
  gists_url: "https://api.github.com/users/WaleedKhan94/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/WaleedKhan94/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/WaleedKhan94/subscriptions",
  organizations_url: "https://api.github.com/users/WaleedKhan94/orgs",
  repos_url: "https://api.github.com/users/WaleedKhan94/repos",
  events_url: "https://api.github.com/users/WaleedKhan94/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/WaleedKhan94/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Waleed Khan",
  company: null,
  blog: "https://waleedkhan94.github.io/waleedportfolio.github.io/",
  location: "Pakistan",
  email: null,
  hireable: null,
  bio: "Trying to find meaning in Data",
  twitter_username: "iamwaleedkhilji",
  public_repos: 15,
  public_gists: 1,
  followers: 3,
  following: 4,
  created_at: "2016-10-05T09:09:03Z",
  updated_at: "2025-01-31T06:43:50Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello From the twitter Route");
});

app.get("/home", (req, res) => {
  res.send("Hello from home");
});

app.get("/github", (req, res) => {
  res.json(githubdata);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
