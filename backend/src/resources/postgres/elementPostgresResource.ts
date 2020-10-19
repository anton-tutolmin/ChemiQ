import { IElementResource } from '../../iface/iElementResource';
import { Element } from '../../models/element.model';
import { IElement } from '../../iface/iElement';

export class ElementPostgresResource implements IElementResource {
  constructor() {
    Element.sync({ force: true });
  }

  public async add(element: IElement): Promise<void> {
    await Element.create(element);
  }

  public async remove(elementNumber: number, userId: number): Promise<void> {
    await Element.destroy({ where: { userId, elementNumber }, limit: 1 });
  }

  public async getByUserId(userId: number): Promise<Element[]> {
    return await Element.findAll({ where: { userId } });
  }
}

export const elementPostgresResource = new ElementPostgresResource();
