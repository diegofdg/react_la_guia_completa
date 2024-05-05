import { useParams } from "react-router-dom"

export default function EditProjectView() {
  const params = useParams()
  const projectId = params.projectId!
  console.log(projectId)
  return (
    <div>EditProjectView</div>
  )
}
