export interface IAuthService {
  login(user: any): string;

  register(user: any): string;
}
