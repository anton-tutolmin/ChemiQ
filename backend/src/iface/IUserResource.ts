import { User } from '../models/user.model';

export interface IUserResource {
  create(user: any): Promise<number>;
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User | null>;
  getByParams(params: any): Promise<User | null>;
  updateById(id: number, params: any): Promise<void>;
  deleteById(id: number): Promise<void>;
  setRatingById(
    userId: number,
    rightAnsers: number,
    totalAnswers: number,
  ): Promise<void>;
}
