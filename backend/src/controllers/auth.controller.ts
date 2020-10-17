import { Request, Response, NextFunction } from 'express';
import { IAuthService } from '../iface/iAuthService';
import { tokenService } from '../services/token.service';

export class AuthController {
  constructor(private authService: IAuthService) {}

  public async login(req: Request, res: Response, next: NextFunction) {
    const token = await this.authService.login({ ...req.body });
    return res.json({ token });
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    const token = await this.authService.register({ ...req.body });
    return res.json({ token });
  }

  public async profile(req: Request, res: Response, next: NextFunction) {
    res.json({ user: req.user });
  }
}

export const authController = new AuthController(tokenService);
