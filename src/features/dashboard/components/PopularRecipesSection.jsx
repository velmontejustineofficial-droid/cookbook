import PopularRecipeCard from './PopularRecipeCard.jsx'
import { recipeService } from '../../recipes/services/recipeService.js'

export default function PopularRecipesSection({ searchTerm }) {
  const recipes = recipeService.getAll().filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return <section className="space-y-3"><div className="flex items-end justify-between px-1"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d7652b]">Community favorites</p><h2 className="mt-1 text-xl font-black tracking-[-0.05em] text-[#2b241c]">Popular recipes</h2></div><button className="mb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#3f6d4c]">All</button></div>{recipes.length > 0 ? recipes.slice(0, 3).map((recipe, index) => <PopularRecipeCard key={recipe.id} recipe={{ ...recipe, detail: `${recipe.category} • ${recipe.time}` }} rank={index + 1} />) : <p className="rounded-[20px] border border-dashed border-[#d6c7ae] py-5 text-center text-sm text-[#756b5d]">No matching recipes.</p>}</section>
}