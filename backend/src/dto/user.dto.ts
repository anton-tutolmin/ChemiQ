import { User } from '../models/user.model';

export class UserDto {
  private id: number;
  private username: string;
  private email: string;
  private totalAnswers: number;
  private rightAnswers: number;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.totalAnswers = user.totalAnswers;
    this.rightAnswers = user.rightAnswers;
  }
}
