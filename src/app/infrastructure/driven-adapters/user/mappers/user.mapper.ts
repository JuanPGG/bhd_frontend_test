import { User } from "src/app/domain/user/models/user.model";
import { UserResponse } from "../models/user.model";

export function userMapper(data: UserResponse): User {
  return ({ fullName: `${data.name} ${data.lastName}`, photo: data.photo });
}