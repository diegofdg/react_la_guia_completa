import type { Request, Response } from "express"
import User from "../models/User"
import Project from "../models/Project"

export class TeamMemberController {
  static findMemberByEmail = async (req: Request, res: Response) => {
    const { email } = req.body

    // Find user
    const user = await User.findOne({ email }).select("id email name")
    if (!user) {
      const error = new Error("Usuario No Encontrado")
      return res.status(404).json({ error: error.message })
    }
    res.json(user)
  }
}
