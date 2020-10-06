import { Request, Response, NextFunction } from "express";
import { ElementService, elementService } from "../services/element.service";

export class ElementController {
  constructor(private _elementService: ElementService) {}

  public async add(req: Request, res: Response, next: NextFunction) {
    const message: string = await this._elementService.add(req.body, req);
    return res.json({ message });
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const elements = await this._elementService.getAll(req);
    return res.json({ elements });
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    const element = await this._elementService.getById(+req.params.id);
    return res.json({ element });
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    const message: string = await this._elementService.deleteById(
      +req.params.id
    );
    return res.json({ message });
  }
}

export const elementController = new ElementController(elementService);
