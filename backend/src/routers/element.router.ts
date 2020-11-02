import { Router } from 'express';
import {
  ElementController,
  elementController,
} from '../controllers/element.controller';
import { jwtMiddleware } from '../middleware/auth.middleware';

class ElementRouter {
  constructor(
    private _router: Router,
    private _elementController: ElementController,
  ) {
    this.setupRouter();
  }

  get elementRouter() {
    return this._router;
  }

  private setupRouter() {
    this._router
      .route('/')

      // GET /elements/
      .get(
        jwtMiddleware,
        this._elementController.getByUserId.bind(this._elementController),
      )

      // POST /elements/
      .post(
        jwtMiddleware,
        this._elementController.add.bind(this._elementController),
      )

      // DELETE /elements/:id
      .delete(
        jwtMiddleware,
        this._elementController.removeElement.bind(this._elementController),
      );
  }
}

export const elementRouter = new ElementRouter(Router(), elementController)
  .elementRouter;
