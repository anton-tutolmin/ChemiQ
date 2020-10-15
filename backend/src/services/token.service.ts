import jsonwebtoken from 'jsonwebtoken';
import { IAuthService } from '../iface/IAuthService';
import { Errors } from '../errors/errors';
import { UserService, userService } from './user.service';

export class TokenService implements IAuthService {
  constructor(private _userService: UserService) {}

  public async login(reqBody: any): Promise<string> {
    if (!reqBody.username) throw Error(Errors.NoUsername);
    if (!reqBody.password) throw Error(Errors.NoPassword);

    const user = await this._userService.getByUsername(reqBody.username);

    if (!user) throw new Error(Errors.WrongUsername);

    if (user.password !== reqBody.password) {
      throw new Error(Errors.WrongPassword);
    }

    const token = jwt.sign({ id: user.id }, 'secret');

    return token;
  }

  public async register(reqBody: any): Promise<string> {
    if (!reqBody.username) throw new Error(Errors.NoUsername);
    if (!reqBody.email) throw new Error(Errors.NoEmail);
    if (!reqBody.password) throw new Error(Errors.NoPassword);

    const user1 = await this._userService.getByUsername(reqBody.username);
    const user2 = await this._userService.getByEmail(reqBody.email);

    if (user1) throw new Error(Errors.UsedUsername);
    if (user2) throw new Error(Errors.UsedEmail);

    const id = await this._userService.create(reqBody);

    const token = jwt.sign({ id }, 'secret');

    return token;
  }
}

export const tokenService = new TokenService(userService);
