import request from "supertest";
import app from "../app";

describe("Test with invalid superhero ID", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/api/superheroes/a")
    .expect('Content-Type', /text/)
    .expect(400);
  });
});

describe("Superhero not found", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/api/superheroes/12345")
    .expect('Content-Type', /text/)
    .expect(404);
  });
});

describe("Superhero found", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/api/superheroes/1")
    .expect('Content-Type', /json/)
    .expect(200);
  });
});


