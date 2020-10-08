import { IUserResource } from "../iface/IUserResource";
import { memResource } from "../resources/userMemResource";

export class UserService {
  constructor(private _resource: IUserResource) {}

  public async create(userBody: any): Promise<number> {
    return await this._resource.create(userBody);
  }

  public async getAll(): Promise<any> {
    return await this._resource.getAll();
  }

  public async getById(id: number): Promise<any> {
    return await this._resource.getById(id);
  }

  public async getByUsername(username: string): Promise<any> {
    return await this._resource.getByUsername(username);
  }

  public async getByEmail(email: string): Promise<any> {
    return await this._resource.getByEmail(email);
  }

  public async updateById(id: number, paramsBody: any): Promise<string> {
    await this._resource.updateById(id, paramsBody);
    return "User updated";
  }

  public async deleteById(id: number): Promise<string> {
    await this._resource.deleteById(id);
    return "User deleted";
  }

  public async getRatingById(userId: number): Promise<number> {
    const user = await this._resource.getById(userId);
    return user.totalAnswer > 0 ? (user.rightAnswer / user.totalAnswer) * 5 : 0;
  }

  public async setRatingById(
    userId: number,
    rightAnswers: number,
    totalAnswers: number
  ): Promise<string> {
    await this._resource.setRatingById(userId, rightAnswers, totalAnswers);
    return "Rating updated";
  }
}

export const userService = new UserService(memResource);
