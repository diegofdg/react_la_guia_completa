import { Router } from "express"
import { body, param } from "express-validator"
import { ProjectController } from "../controllers/ProjectController"
import { handleInputErrors } from "../middleware/validation"
import { TaskController } from "../controllers/TaskController"
import { projectExists } from "../middleware/project"

const router = Router()

router.post("/",
  body("projectName")
    .notEmpty().withMessage("El Nombre del Proyecto es Obligatorio"),
  body("clientName")
    .notEmpty().withMessage("El Nombre del Cliente es Obligatorio"),
  body("description")
    .notEmpty().withMessage("La Descripción del Proyecto es Obligatoria"),
  handleInputErrors,
  ProjectController.createProject
)

router.get("/", ProjectController.getAllProjects)

router.get("/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ProjectController.getProjectById
)

router.put("/:id",
  param("id")
    .isMongoId().withMessage("ID no válido"),
  body("projectName")
    .notEmpty().withMessage("El Nombre del Proyecto es Obligatorio"),
  body("clientName")
    .notEmpty().withMessage("El Nombre del Cliente es Obligatorio"),
  body("description")
    .notEmpty().withMessage("La Descripción del Proyecto es Obligatoria"),
  handleInputErrors,
  ProjectController.updateProject
)

router.delete("/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ProjectController.deleteProject
)

/** Routes for tasks */
router.post("/:projectId/tasks",
  projectExists,
  body("name")
    .notEmpty().withMessage("El Nombre de la tarea es Obligatorio"),
  body("description")
    .notEmpty().withMessage("La descripción de la tarea es obligatoria"),
  handleInputErrors,
  TaskController.createTask
)

export default router