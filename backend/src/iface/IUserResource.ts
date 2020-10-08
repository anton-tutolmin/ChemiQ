export interface IUserResource {
  create(user: any): Promise<number>;
  getAll(): Promise<any[]>;
  getById(id: number): Promise<any>;
  getByUsername(username: string): Promise<any>;
  getByEmail(email: string): Promise<any>;
  updateById(id: number, params: any): void;
  deleteById(id: number): Promise<void>;
  setRatingById(
    userId: number,
    rightAnsers: number,
    totalAnswers: number
  ): Promise<void>;
}
