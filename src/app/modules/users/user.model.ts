import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// adding this to have statice methods
type UserModels = Model<IUser, object>

export const userSchema = new Schema<IUser, UserModels>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // this will automatically create the creation time and updation time of the
  // doc to the mongodb
  {
    timestamps: true,
  }
)

export const userModel = model<IUser, UserModels>('User', userSchema)
