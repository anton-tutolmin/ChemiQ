import { Element } from '../models/element.model';
import { IElement } from '../iface/iElement';
import { IElementResource } from '../iface/iElementResource';
import { elementPostgresResource } from '../resources/postgres/elementPostgresResource';

export class ElementService {
  constructor(private _elementResource: IElementResource) {}

  public async add(reqBody: any): Promise<string> {
    const element: IElement = {
      elementNumber: reqBody.elementNumber,
      userId: reqBody.user.id,
    };

    await this._elementResource.add(element);
    return 'Element added in list';
  }

  public async remove(elementNumber: number, user: any): Promise<string> {
    await this._elementResource.remove(elementNumber, user.id);
    return 'Element was deleted from list';
  }

  public async getByUserId(user: any): Promise<number[]> {
    const elements: Element[] = await this._elementResource.getByUserId(user.id);
    return elements.map(e => e.elementNumber);
  }
}

export const elementService = new ElementService(elementPostgresResource);
