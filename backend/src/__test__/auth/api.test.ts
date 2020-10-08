import dotenv from "dotenv-flow";
import request from "supertest";
import app from "../../app";

dotenv.config();

describe("Test auth api:", () => {
  let token: string;
  const user = {
    username: "authtest",
    password: "authtest",
    email: "authtest@example.com",
  };

  describe("POST request on:", () => {
    test("/auth/register", async () => {
      const response = await request(app).post("/auth/register").send(user);

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).token.length).not.toBe(0);

      token = JSON.parse(response.text).token;
    });

    test("/auth/login", async () => {
      const response = await request(app)
        .post("/auth/login")
        .send({ username: "authtest", password: "authtest" });

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).token.length).not.toBe(0);

      token = JSON.parse(response.text).token;
    });
  });

  describe("GET request on:", () => {
    test("/auth/profile", async () => {
      const response = await request(app)
        .get("/auth/profile")
        .set("authorization", `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).user).toEqual({
        ...user,
        id: 1,
        rightAnswers: 0,
        totalAnswers: 0,
      });
    });
  });
});
