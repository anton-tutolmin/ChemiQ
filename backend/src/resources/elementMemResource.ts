import { IElementResource } from '../iface/IElementResource';

export class ElementMemResource implements IElementResource {
  private _elementLists: Map<number, any[]>;

  constructor() {
    this._elementLists = new Map<number, any[]>();
  }

  public add(elemNumber: number, userId: number): void {
    const old = this._elementLists.get(userId) || [];

    if (!old.includes(elemNumber)) {
      this._elementLists.set(userId, [...old].concat(elemNumber));
    }
  }

  public remove(elemNumber: number, userId: number): void {
    const old = this._elementLists.get(userId) || [];

    if (old.includes(elemNumber)) {
      this._elementLists.set(
        userId,
        old.filter((e) => e !== elemNumber)
      );
    }
  }

  public getByUserId(userId: number): any[] {
    return this._elementLists.get(userId) || [];
  }

  public getAll(): Map<number, any[]> {
    return this._elementLists;
  }
}

export const elementMemResource = new ElementMemResource();
