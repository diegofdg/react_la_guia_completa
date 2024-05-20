import { isAxiosError } from "axios"
import { UserProfileForm } from "../types"
import api from "@/lib/axios"

export async function updateProfile(formData: UserProfileForm) {
  try {
    const { data } = await api.put<string>("/auth/profile", formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}