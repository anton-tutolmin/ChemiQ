import { Request, Response, NextFunction } from "express";
import { IAuthService } from "../iface/IAuthService";
import { tokenService } from "../services/token.service";

export class AuthController {
  constructor(private authService: IAuthService) {}

  public async login(req: Request, res: Response, next: NextFunction) {
    const token = await this.authService.login({ ...req.body });
    res.send({ token });
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    const token = await this.authService.register({ ...req.body });
    res.send({ token });
  }

  public async profile(req: Request, res: Response, next: NextFunction) {
    res.send({ user: req.user });
  }
}

export const authController = new AuthController(tokenService);
