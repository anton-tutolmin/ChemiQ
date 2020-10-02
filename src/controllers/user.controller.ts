import { Request, Response, NextFunction } from "express";
import { UserService, userService } from "../services/user.service";

export class UserController {
  constructor(private userService: UserService) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    res.send("User created");
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    res.send("User array");
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    res.send("User");
  }

  public async updateById(req: Request, res: Response, next: NextFunction) {
    res.send("User updated");
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    res.send("User deleted");
  }
}

export const userController = new UserController(userService);
