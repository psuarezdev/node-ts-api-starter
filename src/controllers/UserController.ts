import { Request, Response } from 'express';
import User from '../models/User';

export async function all(_req: Request, res: Response): Promise<Response> {
  try {
    const users = await User.findAll();

    return res.status(200).json({
      message: 'Users retrieved successfully',
      users
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Something goes wrong'
    });
  }
}
