import { User } from '../models/user.model';

export interface IUserResource {
  create(user: any): Promise<number>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  getByParams(params: any): Promise<User>;
  updateById(id: number, params: any): Promise<void>;
  deleteById(id: number): Promise<void>;
  setRatingById(
    userId: number,
    rightAnsers: number,
    totalAnswers: number,
  ): Promise<void>;
}
