export interface IAuthService {
  login(user: any): Promise<string>;
  register(user: any): Promise<string>;
}
