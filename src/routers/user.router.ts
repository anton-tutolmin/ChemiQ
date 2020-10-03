import { Router } from "express";
import { UserController, userController } from "../controllers/user.controller";

export class UserRouter {
  constructor(
    private _router: Router,
    private _userController: UserController
  ) {
    this.setupRouter();
  }

  get userRouter(): Router {
    return this._router;
  }

  private setupRouter() {
    this._router
      .route("/")

      // GET /users/
      .get(this._userController.getAll.bind(this._userController))

      // POST /users/
      .post(this._userController.create.bind(this._userController));

    this._router
      .route("/:id")

      // GET /users/:id
      .get(this._userController.getById.bind(this._userController))

      // PUT /users/:id
      .put(this._userController.updateById.bind(this._userController))

      // DELETE /users/:id
      .delete(this._userController.deleteById.bind(this._userController));
  }
}

export const userRouter = new UserRouter(Router(), userController).userRouter;
