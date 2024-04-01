import { Activity } from "../types"

export type ActivityActions = {
  { type: "save-activity", payload: { newActivity: Activity } }

}

export type ActivityState = {
  activities: Activity[]
}

export const initialState: ActivityState = {
  activities: []
}

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions

) => {
  if (action.type === "save-activity") {
    // Este código maneja la lógica para actualizar el state
    console.log("Desde el type save-activity")


  }
}