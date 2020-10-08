import { Router } from "express";
import { authRouter } from "./auth.router";
import { userRouter } from "./user.router";
import { elementRouter } from "./element.router";

export interface IRouter {
  url: string;
  router: Router;
}

export class ApiRouter {
  constructor(private router: Router, private routes: IRouter[]) {
    this.setupApiRouter(routes);
  }

  get apiRouter(): Router {
    return this.router;
  }

  public addApiRoute(url: string, router: Router) {
    this.router.use(url, router);
  }

  public setupApiRouter(routes: IRouter[]) {
    routes.forEach((route) => {
      this.addApiRoute(route.url, route.router);
    });
  }
}

const routesArr: IRouter[] = [
  { url: "/auth", router: authRouter },
  { url: "/users", router: userRouter },
  { url: "/elements", router: elementRouter },
];

export const apiRouter = new ApiRouter(Router(), routesArr).apiRouter;
