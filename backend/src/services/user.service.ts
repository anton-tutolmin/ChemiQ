import { IUser } from '../iface/IUser';
import { UserDto } from '../dto/UserDto';
import { IUserResource } from '../iface/IUserResource';
import { userPostgresResource } from '../resources/userPosrgresResources';

export class UserService {
  constructor(private _resource: IUserResource) {}

  public async create(reqBody: any): Promise<number> {
    const params: IUser = reqBody;
    return await this._resource.create(params);
  }

  public async getAll(): Promise<UserDto[]> {
    const users = await this._resource.getAll();
    return users.map((u) => new UserDto(u));
  }

  public async getById(id: number): Promise<UserDto> {
    const user = await this._resource.getById(id);
    return new UserDto(user);
  }

  public async getByUsername(username: string): Promise<UserDto> {
    const user = await this._resource.getByParams({ username });
    return new UserDto(user);
  }

  public async getByEmail(email: string): Promise<UserDto> {
    const user = await this._resource.getByParams({ email });
    return new UserDto(user);
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
