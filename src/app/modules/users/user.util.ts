import { userModel } from './user.model'
import { IUser } from './users.interface'

export const findLastUserId = async () => {
  const lastUserId: IUser = await userModel
    .find({}, { id: 1, _id: 0 })
    .sort({ createdAt: 1 })
    .lean()
  return lastUserId?.id
}
export const generateUserId = async () => {
  const userId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const currentUserId = (parseInt(userId) + 1).toString().padStart(5, '0')
  return currentUserId
}
