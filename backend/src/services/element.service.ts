export class ElementService {
  constructor(private _elementResource: any[]) {}

  public async add(elementId: number, userId: number): Promise<string> {
    await this._elementResource.add(elementId, userId);
    return "Element added in list";
  }

  public async getAll(userId: number): Promise<any[]> {
    return await this._elementResource.getAll(userId);
  }

  public async getById(elementId: number): Promise<any> {
    return await this._elementResource.getById(elementId);
  }

  public async deleteById(elementId: number): Promise<string> {
    await this._elementResource.deleteById(elementId);
    return "Element deleted from list";
  }
}

export const elementService = new ElementService([]);
