export interface IElementResource {
  add(elementId: number, userId: number): void;
  remove(elementId: number, userId: number): void;
  getByUserId(userId: number): any[];
  getAll(): Map<number, any[]>;
}
