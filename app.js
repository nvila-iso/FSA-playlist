import express from "express";
import playlist from "./db/playlist.js";
const app = express();
export default app;

console.log(playlist);

app.route("/").get((req, res) => {
  res.send("You've reached the Playlist API!");
});

app.route("/playlist").get((req, res) => {
  res.send(playlist);
});

app.route("/playlist/:index").get((req, res) => {
  const { index } = req.params;
  const song = playlist[index];

  if (!song) {
    return res.status(404).send("That song does not exist in the playlist.");
  }
  res.send(song);
});
