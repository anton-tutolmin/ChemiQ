import { Router } from "express";
import { AuthController, authController } from "../controllers/auth.controller";
import { jwtMiddlewate } from "../middleware/auth.middleware";

export class AuthRouter {
  constructor(private router: Router, private controller: AuthController) {
    this.setupRouter();
  }

  get authRouter(): Router {
    return this.router;
  }

  private setupRouter() {
    this.router
      .route("/login")

      .post(this.controller.login.bind(this.controller));

    this.router
      .route("/register")

      .post(this.controller.register.bind(this.controller));

    this.router
      .route("/profile")

      .get(jwtMiddlewate, this.controller.profile.bind(this.controller));
  }
}

export const authRouter = new AuthRouter(Router(), authController).authRouter;
