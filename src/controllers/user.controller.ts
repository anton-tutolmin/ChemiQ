import { Request, Response, NextFunction } from "express";
import { UserService, userService } from "../services/user.service";

export class UserController {
  constructor(private _userService: UserService) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    const message: string = await this._userService.create(req.body);
    return res.json({ message });
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const users: any = await this._userService.getAll();
    return res.json({ users });
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    const user: any = await this._userService.getById(+req.params.id);
    return res.json({ user });
  }

  public async updateById(req: Request, res: Response, next: NextFunction) {
    const message: string = await this._userService.updateById(
      +req.params.id,
      req.body
    );
    return res.json({ message });
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    const message: string = await this._userService.deleteById(+req.params.id);
    return res.json({ message });
  }
}

export const userController = new UserController(userService);