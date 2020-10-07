import { IElementResource } from "../iface/IElementResource";
import { elementMemResource } from "../resources/elementMemResource";

export class ElementService {
  constructor(private _elementResource: IElementResource) {}

  public async add(elemNumber: number, user: any): Promise<string> {
    await this._elementResource.add(elemNumber, user.id);
    return "Element added in list";
  }

  public async remove(elemNumber: number, user: any): Promise<string> {
    await this._elementResource.remove(elemNumber, user.id);
    return "Element deleted from list";
  }

  public async getByUserId(user: any): Promise<any[]> {
    return await this._elementResource.getByUserId(user.id);
  }

  public async getAll(): Promise<Map<number, any[]>> {
    return await this._elementResource.getAll();
  }
}

export const elementService = new ElementService(elementMemResource);
