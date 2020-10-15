import { User } from '../models/user.model';
import { IUserResource } from '../iface/IUserResource';
import { Errors } from '../errors/errors';

export class UserPostgresResource implements IUserResource {
  constructor() {
    User.sync({ force: true });
  }

  public async create(user: any): Promise<number> {
    const result: User = await User.create<User>(user);
    return result.id;
  }

  public async getAll(): Promise<User[]> {
    return await User.findAll<User>({});
  }

  public async getById(id: number): Promise<User> {
    const user = await User.findByPk<User>(id);
    if (!user) {
      throw new Error(Errors.NoUser);
    }
    return user;
  }

  public async getByParams(params: any): Promise<User> {
    const user = await User.findOne<User>({ where: { ...params } });
    if (!user) {
      throw new Error(Errors.NoUser);
    }
    return user;
  }

  public async updateById(id: number, params: any): Promise<void> {
    const options = {
      where: { id },
      limit: 1,
    };
    await User.update(params, options);
  }

  public async deleteById(id: number): Promise<void> {
    const options = {
      where: { id },
      limit: 1,
    };
    await User.destroy(options);
  }

  public async setRatingById(
    userId: number,
    rightAnsers: number,
    totalAnswers: number,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export const userPostgresResource = new UserPostgresResource();
