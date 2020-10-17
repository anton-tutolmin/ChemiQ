import { Element } from '../models/element.model';

export interface IElementResource {
  add(elementNumber: number, userId: number): Promise<void>;
  remove(elementNumber: number, userId: number): Promise<void>;
  getByUserId(userId: number): Promise<Element[]>;
}
