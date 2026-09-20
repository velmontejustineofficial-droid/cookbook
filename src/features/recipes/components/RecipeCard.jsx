import { FiClock, FiHeart } from 'react-icons/fi'

export default function RecipeCard({ recipe, onToggleFavorite }) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-[#eadfcd] bg-[#fffaf1] shadow-sm">
      <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }} />
      <div className="p-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-bold text-[#34291f]">{recipe.name}</h2>
            <p className="mt-1 text-xs text-[#756b5d]">{recipe.category}</p>
          </div>
          <button onClick={() => onToggleFavorite(recipe.id)} aria-label={`${recipe.isFavorite ? 'Remove' : 'Add'} ${recipe.name} ${recipe.isFavorite ? 'from' : 'to'} favorites`} className={['text-lg', recipe.isFavorite ? 'text-[#d7652b]' : 'text-[#b9a995]'].join(' ')}><FiHeart aria-hidden="true" fill={recipe.isFavorite ? 'currentColor' : 'none'} /></button>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-[#756b5d]"><FiClock aria-hidden="true" />{recipe.time}</div>
      </div>
    </article>
  )
}