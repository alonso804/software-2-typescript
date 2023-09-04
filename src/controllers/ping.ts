import type { Request, Response } from 'express';
import TestModel from 'src/models/user';

class PingController {
  static ping(_req: Request, res: Response): void {
    res.status(200).send({ message: 'pong' });
  }
}

export default PingController;
