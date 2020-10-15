import { IUser } from '../iface/IUser';
import { User } from '../models/user.model';
import { IUserResource } from '../iface/IUserResource';
import { userPostgresResource } from '../resources/userPosrgresResources';

export class UserService {
  constructor(private _resource: IUserResource) {}

  public async create(reqBody: any): Promise<number> {
    const params: IUser = reqBody;
    return await this._resource.create(params);
  }

  public async getAll(): Promise<User[]> {
    return await this._resource.getAll();
  }

  public async getById(id: number): Promise<User> {
    return await this._resource.getById(id);
  }

  public async getByUsername(username: string): Promise<User> {
    return await this._resource.getByParams({ username });
  }

  public async getByEmail(email: string): Promise<User> {
    return await this._resource.getByParams({ email });
  }

  public async updateById(id: number, paramsBody: any): Promise<string> {
    await this._resource.updateById(id, paramsBody);
    return 'User updated';
  }

  public async deleteById(id: number): Promise<string> {
    await this._resource.deleteById(id);
    return 'User deleted';
  }

  public async getRatingById(userId: number): Promise<number> {
    const user = await this._resource.getById(userId);
    return user.totalAnswers > 0 ?
      (user.rightAnswers / user.totalAnswers) * 5
      : 0;
  }

  public async setRatingById(
    userId: number,
    rightAnswers: number,
    totalAnswers: number,
  ): Promise<string> {
    await this._resource.updateById(userId, { rightAnswers, totalAnswers });
    return 'Rating updated';
  }
}

export const userService = new UserService(userPostgresResource);
