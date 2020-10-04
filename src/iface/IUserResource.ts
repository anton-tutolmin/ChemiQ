class User {}

export interface IUserResource {
  create(user: any): void;
  getAll(): Promise<any[]>;
  getById(id: number): Promise<any>;
  updateById(id: number, params: any): void;
  deleteById(id: number): void;
}
