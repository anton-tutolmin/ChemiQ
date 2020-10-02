class User {}

export interface IUserResource {
  create(user: any): boolean;
  getAll(): User[];
  getById(id: number): User;
  updateById(id: number, params: any): boolean;
  deleteById(id: number): boolean;
}
