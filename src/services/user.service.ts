export class UserService {
  constructor(private _users: any[], private _lastId: number) {}

  public create(userBody: any): string {
    this._users.push({
      ...userBody,
      id: ++this._lastId,
    });
    return "User created";
  }

  public getAll(): any {
    return this._users;
  }

  public getById(id: number) {
    const user = this._users.find((u) => u.id === id);
    return user;
  }

  public updateById(id: number, paramsBody: any) {
    const user = this._users.find((u) => u.id === id);
    Object.keys(paramsBody).forEach((param) => {
      user[param] = paramsBody[param];
    });
    return "User updated";
  }

  public deleteById(id: number) {
    this._users = this._users.filter((u) => u.id !== id);
    return "User deleted";
  }
}

export const userService = new UserService([], 0);
