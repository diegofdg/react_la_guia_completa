import type { Request, Response } from "express"
import Task from "../models/Task"

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
    const { projectId } = req.params

    try {
      console.log(projectId)
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" })
    }
  }
}