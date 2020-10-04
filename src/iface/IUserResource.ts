class User {}

export interface IUserResource {
  create(user: any): void;
  getAll(): Promise<any[]>;
  getById(id: number): Promise<any>;
  getByUsername(username: string): Promise<any>;
  getByEmail(email: string): Promise<any>;
  updateById(id: number, params: any): void;
  deleteById(id: number): void;
}
