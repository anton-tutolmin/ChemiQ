import { Errors } from '../errors/errors';
import { IUser } from '../iface/iUser';

export class ValidationService {

  public validateCreateBody(createBody: IUser): void {
    this.validateUsername(createBody.username);
    this.validatePassword(createBody.password);
    this.validateEmail(createBody.email);
  }

  public validateUpdateBody(updateBody: any) {
    const allowedKeys = ['username', 'email'];
    for (const key of Object.keys(updateBody)) {
      if (key === 'username') this.validateUsername(updateBody[key]);
      if (key === 'email') this.validateEmail(updateBody[key]);
      if (!allowedKeys.includes(key)) throw new Error(Errors.ExcessFields);
    }
  }

  public validateUsername(username: string): boolean {
    throw new Error(Errors.NotCorrectUsername);
  }

  public validatePassword(password: string): boolean {
    throw new Error(Errors.NotCorrectPassword);
  }

  public validateEmail(email: string): boolean {
    throw new Error(Errors.NotCorrectEmail);
  }
}

export const validationService = new ValidationService();
