import PopularRecipeCard from './PopularRecipeCard.jsx'
import { recipeService } from '../../recipes/services/recipeService.js'

export default function PopularRecipesSection({ searchTerm }) {
  const recipes = recipeService.getAll().filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return <section className="space-y-3"><div className="flex items-center justify-between px-0.5"><h2 className="text-lg font-black tracking-[-0.04em] text-[#2b241c]">Popular recipes</h2><button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3f6d4c]">All</button></div>{recipes.length > 0 ? recipes.slice(0, 3).map((recipe) => <PopularRecipeCard key={recipe.id} recipe={{ ...recipe, detail: `${recipe.category} • ${recipe.time}` }} />) : <p className="py-4 text-center text-sm text-[#756b5d]">No matching recipes.</p>}</section>
}