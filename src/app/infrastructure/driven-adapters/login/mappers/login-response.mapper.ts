import { Token } from "src/app/domain/login/models/login.model";
import { LoginResponse } from "../models/login-response.model";

export function loginResponseMapper(data: LoginResponse): Token {
  return ({
    accesToken: data.access_token,
    refreshToken: data.refresh_token
  })
}