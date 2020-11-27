import argon2 from 'argon2';
import { IHashService } from '../iface/IHashService';

export class HashService implements IHashService {
  constructor(private _hasher: any) {}

  public async hashPassword(password: string): Promise<string> {
    return await this._hasher.hash(password);
  }

  public async isValidPassword(password: string, hash: string): Promise<boolean> {
    return await this._hasher.compare(password, hash);
  }
}

export const bcryptService = new HashService(argon2);
