import RecipeCard from './RecipeCard.jsx'

export default function RecipeList({ recipes, onToggleFavorite }) {
  if (recipes.length === 0) {
    return <p className="rounded-[20px] border border-dashed border-[#d6c7ae] p-6 text-center text-sm text-[#756b5d]">No recipes found.</p>
  }

  return <div className="grid gap-3 sm:grid-cols-2">{recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onToggleFavorite={onToggleFavorite} />)}</div>
}