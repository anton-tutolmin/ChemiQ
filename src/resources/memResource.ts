import { IUserResource } from "../iface/IUserResource";

export class MemResource implements IUserResource {
  constructor(private _userDb: any[], private _lastId: number) {}

  public async create(user: any): Promise<void> {
    this._userDb.push({
      ...user,
      id: ++this._lastId,
    });
  }

  public async getAll(): Promise<any[]> {
    return this._userDb;
  }

  public async getById(id: number): Promise<any> {
    return this._userDb.find((u) => u.id === id);
  }

  public async updateById(id: number, params: any): Promise<void> {
    const user = this._userDb.find((u) => u.id === id);
    Object.keys(params).forEach((param) => {
      user[param] = params[param];
    });
  }

  public async deleteById(id: number): Promise<void> {
    this._userDb = this._userDb.filter((u) => u.id !== id);
  }
}

export const memResource = new MemResource([], 0);
