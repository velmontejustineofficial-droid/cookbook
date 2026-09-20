import TrendingRecipeCard from './TrendingRecipeCard.jsx'
import { recipeService } from '../../recipes/services/recipeService.js'

export default function TrendingSection({ searchTerm }) {
  const recipes = recipeService.getAll().filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <section className="rounded-[24px] border border-[#e4dac9] bg-[#fffaf1] p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-black tracking-[-0.04em] text-[#2b241c]">Trending</h2><button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3f6d4c]">More</button></div>
      {recipes.length > 0 ? <div className="flex gap-3 overflow-x-auto pb-1">{recipes.slice(0, 3).map((recipe) => <TrendingRecipeCard key={recipe.id} recipe={{ title: recipe.name, ...recipe }} />)}</div> : <p className="py-4 text-center text-sm text-[#756b5d]">No matching recipes.</p>}
    </section>
  )
}