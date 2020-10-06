import { Router } from "express";
import { AuthController, authController } from "../controllers/auth.controller";
import { jwtMiddlewate } from "../middleware/auth.middleware";

export class AuthRouter {
  constructor(private _router: Router, private _controller: AuthController) {
    this.setupRouter();
  }

  get authRouter(): Router {
    return this._router;
  }

  private setupRouter() {
    this._router
      .route("/login")

      // POST /auth/login/
      .post(this._controller.login.bind(this._controller));

    this._router
      .route("/register")

      // POST /auth/register/
      .post(this._controller.register.bind(this._controller));

    this._router
      .route("/profile")

      // GET /auth/profile/
      .get(jwtMiddlewate, this._controller.profile.bind(this._controller));
  }
}

export const authRouter = new AuthRouter(Router(), authController).authRouter;
