import { IUserResource } from "../iface/IUserResource";
import { memResource } from "../resources/memResource";

export class UserService {
  constructor(private _resource: IUserResource) {}

  public async create(userBody: any): Promise<string> {
    await this._resource.create(userBody);
    return "User created";
  }

  public async getAll(): Promise<any> {
    return await this._resource.getAll();
  }

  public getById(id: number): Promise<any> {
    return this._resource.getById(id);
  }

  public async updateById(id: number, paramsBody: any): Promise<string> {
    await this._resource.updateById(id, paramsBody);
    return "User updated";
  }

  public async deleteById(id: number): Promise<string> {
    await this._resource.deleteById(id);
    return "User deleted";
  }
}

export const userService = new UserService(memResource);
