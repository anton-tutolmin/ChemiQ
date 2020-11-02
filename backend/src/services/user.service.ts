import { IUser } from '../iface/iUser';
import { User } from '../models/user.model';
import { IUserResource } from '../iface/iUserResource';
import { IHashService } from '../iface/IHashService';
import { userPostgresResource } from '../resources/postgres/userPosrgresResources';
import { bcryptService } from './hash.service';
import { ValidationService, validationService } from './validation.service';

export class UserService {
  constructor(
    private _resource: IUserResource,
    private _hasher: IHashService,
    private _validation: ValidationService,
  ) {}

  public async create(reqBody: any): Promise<User> {
    const params: IUser = { ...reqBody };
    this._validation.validateCreateBody(params);
    params.password = await this._hasher.hashPassword(params.password);
    return await this._resource.create(params);
  }

  public async getAll(): Promise<User[]> {
    return await this._resource.getAll();
  }

  public async getById(id: number): Promise<User | null> {
    return await this._resource.getById(id);
  }

  public async getByUsername(username: string): Promise<User | null> {
    return await this._resource.getByParams({ username });
  }

  public async getByEmail(email: string): Promise<User | null> {
    return await this._resource.getByParams({ email });
  }

  public async updateById(id: number, paramsBody: any): Promise<string> {
    this._validation.validateUpdateBody(paramsBody);
    await this._resource.updateById(id, paramsBody);
    return 'User updated';
  }

  public async deleteById(id: number): Promise<string> {
    await this._resource.deleteById(id);
    return 'User deleted';
  }

  public async getRatingById(userId: number): Promise<number> {
    const user = await this._resource.getById(userId);
    return user ? this.calcRating(user.rightAnswers, user.totalAnswers) : 0;
  }

  public async setRatingById(
    userId: number,
    rightAnswers: number,
    totalAnswers: number,
  ): Promise<string> {
    await this._resource.updateById(userId, { rightAnswers, totalAnswers });
    return 'Rating updated';
  }

  public calcRating(rights: number, total: number): number {
    return total > 0 ? (rights / total) * 5 : 0;
  }
}

export const userService = new UserService(userPostgresResource, bcryptService, validationService);
