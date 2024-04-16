import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice"
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a)
})))
