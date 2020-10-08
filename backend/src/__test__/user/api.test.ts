import request from "supertest";
import app from "../../app";
import dotenv from "dotenv-flow";

dotenv.config();

describe("Test user api:", () => {
  const user = {
    username: "anton",
    password: "anton",
    email: "anton@example.com",
  };

  describe("POST request on:", () => {
    test("/users/", async () => {
      const response = await request(app).post("/users/").send(user);

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).message).toBe("User created");
    });
  });

  describe("GET request on:", () => {
    test("/users/", async () => {
      const response = await request(app).get("/users/");

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).users.length).toBe(1);
      expect(JSON.parse(response.text).users[0]).toEqual({
        ...user,
        id: 1,
        rightAnswers: 0,
        totalAnswers: 0,
      });
    });

    test("/users/:id", async () => {
      const response = await request(app).get(`/users/${1}`);

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).user).toEqual({
        ...user,
        id: 1,
        rightAnswers: 0,
        totalAnswers: 0,
      });
    });
  });

  describe("PUT request on:", () => {
    test("/users/:id", async () => {
      const response = await request(app).put(`/users/${1}`).send({
        username: "pavel",
      });

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).message).toBe("User updated");
    });
  });

  describe("DELETE request on:", () => {
    test("/users/:id", async () => {
      const response = await request(app).delete(`/users/${1}`);

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).message).toBe("User deleted");
    });
  });
});
