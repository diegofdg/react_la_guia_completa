import { Router } from "express"
import { body, param } from "express-validator"
import { ProjectController } from "../controllers/ProjectController"
import { handleInputErrors } from "../middleware/validation"
import { TaskController } from "../controllers/TaskController"
import { projectExists } from "../middleware/project"
import { taskBelongsToProject, taskExists } from "../middleware/task"

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

router.param("projectId", projectExists)

router.get("/:projectId",
  param("projectId").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ProjectController.getProjectById
)

router.put("/:projectId",
  param("projectId")
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

router.delete("/:projectId",
  param("projectId").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ProjectController.deleteProject
)

/** Routes for tasks */

router.post("/:projectId/tasks",
  body("name")
    .notEmpty().withMessage("El Nombre de la tarea es Obligatorio"),
  body("description")
    .notEmpty().withMessage("La descripción de la tarea es obligatoria"),
  handleInputErrors,
  TaskController.createTask
)

router.get("/:projectId/tasks",
  TaskController.getProjectTasks
)

router.param("taskId", taskExists)
router.param("taskId", taskBelongsToProject)

router.get("/:projectId/tasks/:taskId",
  param("taskId").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  TaskController.getTaskById
)

router.put("/:projectId/tasks/:taskId",
  param("taskId").isMongoId().withMessage("ID no válido"),
  body("name")
    .notEmpty().withMessage("El Nombre de la tarea es Obligatorio"),
  body("description")
    .notEmpty().withMessage("La descripción de la tarea es obligatoria"),
  handleInputErrors,
  TaskController.updateTask
)

router.delete("/:projectId/tasks/:taskId",
  param("taskId").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  TaskController.deleteTask
)

router.post("/:projectId/tasks/:taskId/status",
  param("taskId").isMongoId().withMessage("ID no válido"),
  body("status")
    .notEmpty().withMessage("El estado es obligatorio"),
  handleInputErrors,
  TaskController.updateStatus
)

export default router