import { Router } from "express";
import {
  ElementController,
  elementController,
} from "../controllers/element.controller";
import { jwtMiddlewate } from "../middleware/auth.middleware";

class ElementRouter {
  constructor(
    private _router: Router,
    private _elementController: ElementController
  ) {
    this.setupRouter();
  }

  private setupRouter() {
    this._router
      .route("/")

      // GET /elements/
      .get(
        jwtMiddlewate,
        this._elementController.getAll.bind(this._elementController)
      )

      // POST /elements/
      .post(
        jwtMiddlewate,
        this._elementController.add.bind(this._elementController)
      );

    this._router
      .route("/:id")

      // GET /elements/:id
      .get(this._elementController.getById.bind(this._elementController))

      // DELETE /elements/:id
      .delete(this._elementController.deleteById.bind(this._elementController));
  }
}

export const elementRouter = new ElementRouter(Router(), elementController);
