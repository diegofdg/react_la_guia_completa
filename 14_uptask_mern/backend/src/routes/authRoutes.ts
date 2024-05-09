import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  res.send("Desde /api/auth")
})

export default router