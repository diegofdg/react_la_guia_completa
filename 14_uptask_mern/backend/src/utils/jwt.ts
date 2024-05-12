import jwt from "jsonwebtoken"
import Types from "mongoose"

export const generateJWT = () => {
  const data = {
    name: "Juan",
    credit_card: "123456789456123",
    password: "password"
  }
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "180d"
  })
  return token
}