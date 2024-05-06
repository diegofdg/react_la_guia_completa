import { useLocation, useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getTaskById } from "@/api/TaskAPI"

export default function EditTaskData() {
  const params = useParams()
  const projectId = params.projectId!
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const taskId = queryParams.get("editTask")!

  const { data } = useQuery({
    queryKey: ['task', taskId],
    queryFn: () => getTaskById({ projectId, taskId })
  })

  return (
    <div>EditTaskData</div>
  )
}

