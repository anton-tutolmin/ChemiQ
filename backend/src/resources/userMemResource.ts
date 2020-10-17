// import { IUserResource } from '../iface/iUserResource';
// import { IUser } from '../iface/iUser';

// export class UserMemResource implements IUserResource {
//   constructor(private _userDb: any[], private _lastId: number) {}

//   public async create(user: IUser): Promise<IUser> {
//     this._lastId += 1;
//     this._userDb.push({
//       ...user,
//       id: this._lastId,
//       rightAnswers: 0,
//       totalAnswers: 0,
//     });
//     return this._userDb.find(u => u.id === this._lastId);
//   }

//   public async getAll(): Promise<IUser[]> {
//     return this._userDb;
//   }

//   public async getById(id: number): Promise<IUser> {
//     return this._userDb.find((u) => u.id === id);
//   }

//   public async getByParams(params: any): Promise<IUser> {
//     return {
//       username: '',
//       password: '',
//       email: '',
//       totalAnswers: 0,
//       rightAnswers: 0,
//     };
//   }

//   public async getByUsername(username: string): Promise<IUser> {
//     return this._userDb.find((u) => u.username === username);
//   }

//   public async getByEmail(email: string): Promise<IUser> {
//     return this._userDb.find((u) => u.email === email);
//   }

//   public async updateById(id: number, params: any): Promise<void> {
//     const user = this._userDb.find((u) => u.id === id);
//     Object.keys(params).forEach((param) => {
//       user[param] = params[param];
//     });
//   }

//   public async deleteById(id: number): Promise<void> {
//     this._userDb = this._userDb.filter((u) => u.id !== id);
//   }

//   public async setRatingById(
//     userId: number,
//     rightAnswers: number,
//     totalAnswers: number,
//   ): Promise<void> {
//     const user = this._userDb.find((u) => u.id === userId);
//     user.rightAnswers = user.rightAnswers + rightAnswers;
//     user.totalAnswers = user.totalAnswers + totalAnswers;
//   }
// }

// export const memResource = new UserMemResource([], 0);
