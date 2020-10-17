import { IElementResource } from '../../iface/iElementResource';
import { Element } from '../../models/element.model';

export class ElementPostgresResource implements IElementResource {
  constructor() {
    Element.sync();
  }

  public async add(elementNumber: number, userId: number): Promise<void> {
    await Element.create({ userId, elementNumber });
  }

  public async remove(elementNumber: number, userId: number): Promise<void> {
    await Element.destroy({ where: { userId, elementNumber }, limit: 1 });
  }

  public async getByUserId(userId: number): Promise<Element[]> {
    return await Element.findAll({ where: { userId } });
  }

}
