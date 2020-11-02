import { Request, Response, NextFunction } from 'express';
import { UserService, userService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';
import { User } from '../models/user.model';
import { Errors } from '../errors/errors';

export class UserController {
  constructor(private _userService: UserService) {}

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user: User = await this._userService.create(req.body);
      return res.json({ user: new UserDto(user) });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users: User[] = await this._userService.getAll();
      return res.json({ users: users.map((u) => new UserDto(u)) });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this._userService.getById(+req.params.id);

      if (!user) throw new Error(Errors.NoUser);

      return res.json({ user: new UserDto(user) });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  public async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const message: string = await this._userService.updateById(
        +req.params.id,
        req.body,
      );

      return res.json({ message });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const message: string = await this._userService.deleteById(+req.params.id);
      return res.json({ message });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  public async getRatingById(req: Request, res: Response, next: NextFunction) {
    try {
      const rating: number = await this._userService.getRatingById(
        +req.params.id,
      );

      return res.json({ rating });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  public async setRatingById(req: Request, res: Response, next: NextFunction) {
    try {
      const message: string = await this._userService.setRatingById(
        +req.params.id,
        req.body.rightAnswer,
        req.body.totalAnswer,
      );

      return res.json({ message });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }
}

export const userController = new UserController(userService);
