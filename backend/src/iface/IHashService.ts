export interface IHashService {
  hashPassword(password: string): Promise<string>;
  isValidPassword(password: string, hash: string): Promise<boolean>;
}
