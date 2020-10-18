import { Element } from '../models/element.model';
import { IElement } from './iElement';

export interface IElementResource {
  add(element: IElement): Promise<void>;
  remove(elementNumber: number, userId: number): Promise<void>;
  getByUserId(userId: number): Promise<Element[]>;
}
