import { Element } from '../models/element.model';

export class ElementDto {
  private elementNumber: number;

  constructor(element: Element) {
    this.elementNumber = element.elementNumber;
  }
}
