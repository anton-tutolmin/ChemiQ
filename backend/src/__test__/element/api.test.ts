import request from "supertest";
import app from "../../app";
import dotenv from "dotenv-flow";

dotenv.config();

describe("Test element api:", () => {
  let token: string;

  beforeAll(async () => {
    const response = await request(app).post("/auth/register").send({
      username: "elemTest",
      password: "elemTest",
      email: "elemTest@example.com",
    });

    token = JSON.parse(response.text).token;
  });

  describe("POST request on:", () => {
    test("/elements/", async () => {
      const response = await request(app)
        .post("/elements/")
        .send({
          elemNumber: 15,
        })
        .set({
          Authorization: `Bearer ${token}`,
        });

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).message).toBe("Element added in list");
    });
  });

  describe("GET request on:", () => {
    test("/elements/", async () => {
      const response = await request(app)
        .get("/elements/")
        .set({
          Authorization: `Bearer ${token}`,
        });

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).elements).toEqual([15]);
    });
  });

  describe("DELETE request on:", () => {
    test("/elements/", async () => {
      const response = await request(app)
        .delete("/elements/")
        .send({
          elemNumber: 15,
        })
        .set({
          Authorization: `Bearer ${token}`,
        });

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text).message).toBe(
        "Element was deleted from list"
      );
    });
  });
});
