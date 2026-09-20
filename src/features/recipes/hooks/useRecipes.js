import { recipeService } from '../services/recipeService.js'

export default function useRecipes() {
  return recipeService.getAll()
}