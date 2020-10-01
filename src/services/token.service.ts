import jwt from "jsonwebtoken";
import { IAuthService } from "../iface/IAuthService";
import { Errors } from "../errors/errors";

export class TokenService implements IAuthService {
  public login(reqBody: any): string {
    if (!reqBody.username) throw Error(Errors.NoUsername);
    if (!reqBody.password) throw Error(Errors.NoPassword);

    const user = { id: 1, username: "anton" };

    const token = jwt.sign({ id: user.id }, "secret");

    return token;
  }

  public register(reqBody: any): string {
    if (!reqBody.username) throw new Error(Errors.NoUsername);
    if (!reqBody.email) throw new Error(Errors.NoEmail);
    if (!reqBody.password) throw new Error(Errors.NoPassword);

    const user = { id: 1, username: "anton" };

    const token = jwt.sign({ id: user.id }, "secret");

    return token;
  }
}

export const tokenService = new TokenService();
