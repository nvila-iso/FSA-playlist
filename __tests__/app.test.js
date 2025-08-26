import request from "supertest";
import { beforeAll, describe, expect, it } from "vitest";

import app from "#app";
import playlist from "#db/playlist";

describe("Express app", () => {
  it("is defined", () => {
    expect(app).toBeDefined();
  });

  it("responds to requests", async () => {
    const response = await request(app).get("/");
    expect(response).toBeDefined();
  });
});

describe("GET /", () => {
  let response;
  beforeAll(async () => (response = await request(app).get("/")));

  it("sends a response with status 200", () => {
    expect(response.status).toBe(200);
  });

  it("sends back the message 'You've reached the Playlist API!'", () => {
    expect(response.text).toBe("You've reached the Playlist API!");
  });
});

describe("GET /playlist", () => {
  let response;
  beforeAll(async () => (response = await request(app).get("/playlist")));

  it("sends a response with status 200", () => {
    expect(response.status).toBe(200);
  });

  it("sends back the playlist defined in playlist.js", () => {
    expect(response.body).toEqual(playlist);
  });
});

describe("GET /playlist/:index", () => {
  it("sends the song at index 0 of playlist", async () => {
    const response = await request(app).get("/playlist/0");
    expect(response.status).toBe(200);
    expect(response.text).toBe(playlist[0]);
  });

  it("sends the message 'That song does not exist in the playlist.' with status 404 if it doesn't exist", async () => {
    const response = await request(app).get(`/playlist/` + playlist.length);
    expect(response.status).toBe(404);
    expect(response.text).toBe("That song does not exist in the playlist.");
  });
});
