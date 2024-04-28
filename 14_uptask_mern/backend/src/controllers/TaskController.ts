import type { Request, Response } from "express"
import Task from "../models/Task"
import Project from "../models/Project"

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
    const { projectId } = req.params
    const project = await Project.findById(projectId)
    if (!project) {
      const error = new Error("Proyecto no encontrado")
      return res.status(404).json({ error: error.message })
    }
    try {
      const task = new Task(req.body)
      task.project = project.id
      project.tasks.push(task.id)
      await task.save()
      await project.save()
      res.send("Tarea creada correctamente")
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" })
    }
  }
}