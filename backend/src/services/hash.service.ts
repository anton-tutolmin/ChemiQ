import bcrypt from 'bcrypt';
import { IHashService } from '../iface/IHashService';

export class HashService implements IHashService {
  constructor(private _hasher: any, private _saltRounds: number) {}

  public async hashPassword(password: string): Promise<string> {
    const salt = await this._hasher.genSalt(this._saltRounds);
    return await this._hasher.hash(password, salt);
  }

  public async isValidPassword(password: string, hash: string): Promise<void> {
    return this._hasher.compare(password, hash);
  }
}

export const bcryptService = new HashService(bcrypt, 10);
