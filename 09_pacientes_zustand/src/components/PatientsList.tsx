import { usePatientStore } from "../store"

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients)
  console.log(patients)
  
  return (
    <div>PatientsList</div>
  )
}
