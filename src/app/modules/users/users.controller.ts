import { Request, Response } from 'express'
import userService from './user.service'
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body)
    res.status(200).json({
      status: 'Success',
      user: user,
    })
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      error: err,
    })
  }
}
export default { createUser }
