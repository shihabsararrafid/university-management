import config from './../../../../config/index'
import { userModel } from './user.model'
import { generateUserId } from './user.util'
import { IUser } from './users.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()
  user.id = id as unknown as string
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await userModel.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
