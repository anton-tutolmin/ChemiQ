import { Request, Response, NextFunction } from "express";
import { ElementService, elementService } from "../services/element.service";

export class ElementController {
  constructor(private _elementService: ElementService) {}

  public async add(req: Request, res: Response, next: NextFunction) {
    const message = await this._elementService.add(
      req.body.elemNumber,
      req.user
    );
    res.send({ message });
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    const message: string = await this._elementService.remove(
      req.body.elemNumber,
      req.user
    );
    return res.json({ message });
  }

  public async getByUserId(req: Request, res: Response, next: NextFunction) {
    const elements = await this._elementService.getByUserId(req.user);
    return res.json({ elements });
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const elements = await this._elementService.getAll();
    return res.json({ elements });
  }
}

export const elementController = new ElementController(elementService);
