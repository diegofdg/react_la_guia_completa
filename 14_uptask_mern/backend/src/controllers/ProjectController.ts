import type { Request, Response } from "express"
import Project from "../models/Project"


export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    const project = new Project(req.body)

    // Asigna un manager
    project.manager = req.user.id

    try {
      await project.save()
      res.send("Proyecto Creando Correctamente")
    } catch (error) {
      console.log(error)
    }
  }

  static getAllProjects = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find({
        $or: [
          { manager: { $in: req.user.id } },
          { team: { $in: req.user.id } }
        ]
      })
      res.json(projects)
    } catch (error) {
      console.log(error)
    }
  }

  static getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const project = await Project.findById(id).populate("tasks")
      if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ error: error.message })
      }
      if (project.manager.toString() !== req.user.id.toString() && !project.team.includes(req.user.id)) {
        const error = new Error("Acción no válida")
        return res.status(404).json({ error: error.message })
      }
      res.json(project)
    } catch (error) {
      console.log(error)
    }
  }

  static updateProject = async (req: Request, res: Response) => {
    const { projectId } = req.params
    try {
      const project = await Project.findById(projectId)
      if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ error: error.message })
      }
      if (project.manager.toString() !== req.user.id.toString()) {
        const error = new Error("Solo el manager puede actualizar un proyecto")
        return res.status(404).json({ error: error.message })
      }
      req.project.clientName = req.body.clientName
      req.project.projectName = req.body.projectName
      req.project.description = req.body.description
      await req.project.save()
      res.json("Proyecto actualizado")
    } catch (error) {
      console.log(error)
    }
  }

  static deleteProject = async (req: Request, res: Response) => {
    const { projectId } = req.params
    try {
      const project = await Project.findById(projectId)
      if (!project) {
        const error = new Error("Proyecto no encontrado")
        return res.status(404).json({ error: error.message })
      }
      if (project.manager.toString() !== req.user.id.toString()) {
        const error = new Error("Solo el manager puede eliminar un proyecto")
        return res.status(404).json({ error: error.message })
      }
      await req.project.deleteOne()
      res.send("Proyecto Eliminado")
    } catch (error) {
      console.log(error)
    }
  }
}