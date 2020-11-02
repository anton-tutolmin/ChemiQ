import bcrypt from 'bcrypt';

export class HashService {
  constructor(private _hasher: any, private _saltRounds: number) {}

  public async hashPassword(password: string): Promise<string> {
    const salt = await this._hasher.genSalt(this._saltRounds);
    return await this._hasher.hash(password, salt);
  }

  public async isValidPassword(password: string, hash: string) {
    return this._hasher.compare(password, hash);
  }
}

export const hashBcryptService = new HashService(bcrypt, 10);
