import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
  res.send("Desde GET")
})

router.post('/', (req, res) => {
  res.send("Desde POST")
})

router.put('/', (req, res) => {
  res.send("Desde PUT")
})

router.patch('/', (req, res) => {
  res.send("Desde PATCH")
})

router.delete('/', (req, res) => {
  res.send("Desde DELETE")
})

export default router