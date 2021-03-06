import { User } from '../../models/user.model';
import { IUserResource } from '../../iface/iUserResource';
import { IUser } from '../../iface/iUser';

export class UserPostgresResource implements IUserResource {
  constructor() {
    User.sync();
  }

  public async create(user: IUser): Promise<User> {
    return await User.create<User>(user);
  }

  public async getAll(): Promise<User[]> {
    return await User.findAll<User>({});
  }

  public async getById(id: number): Promise<User | null> {
    const user = await User.findByPk<User>(id);
    return user;
  }

  public async getByParams(params: any): Promise<User | null> {
    const user = await User.findOne<User>({ where: { ...params } });
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
