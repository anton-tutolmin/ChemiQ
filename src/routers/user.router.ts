import { Router } from "express";

export class UserRouter {
  constructor(private router: Router, private userController: UserController) {
    this.setupRouter();
  }

  get userRouter(): Router {
    return this.router;
  }

  private setupRouter() {
    this.router
      .route("/")

      // GET /users/
      .get(this.userController.getAll.bind(this.userController))

      // POST /users/
      .post(this.userController.create.bind(this.userController));

    this.router
      .route("/:id")

      // GET /users/:id
      .get(this.userController.getById.bind(this.userController))

      // PUT /users/:id
      .put(this.userController.updateById.bind(this.userController))

      // DELETE /users/:id
      .delete(this.userController.deleteById.bind(this.userController));
  }
}

export const userRouter = new UserRouter(Router());
