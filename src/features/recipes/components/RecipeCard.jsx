import { FiClock, FiEdit2, FiHeart, FiTrash2 } from 'react-icons/fi'

export default function RecipeCard({ recipe, onToggleFavorite, currentUserId, onEdit, onDelete, onView }) {
  const isOwner = recipe.ownerId === currentUserId

  return (
    <article className="group overflow-hidden rounded-[22px] border border-[#eadfcd] bg-[#fffaf1] shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }}>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#214c37]/70 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-[#fff8e9]/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#315640]">{recipe.category}</span>
        <span className="absolute right-3 top-3 rounded-full bg-[#214c37]/85 px-2.5 py-1 text-[10px] font-bold text-white">{isOwner ? 'Your recipe' : 'Community'}</span>
      </div>
      <div className="p-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-bold text-[#34291f]">{recipe.name}</h2>
            <p className="mt-1 text-xs text-[#756b5d]">Ready in {recipe.time}</p>
          </div>
          <button onClick={() => onToggleFavorite(recipe.id)} aria-label={`${recipe.isFavorite ? 'Remove' : 'Add'} ${recipe.name} ${recipe.isFavorite ? 'from' : 'to'} favorites`} className={['text-lg', recipe.isFavorite ? 'text-[#d7652b]' : 'text-[#b9a995]'].join(' ')}><FiHeart aria-hidden="true" fill={recipe.isFavorite ? 'currentColor' : 'none'} /></button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 text-xs text-[#756b5d]"><button onClick={() => onView(recipe)} className="font-semibold text-[#3f6d4c]">View recipe</button>{isOwner ? <span className="flex items-center gap-1"><button onClick={() => onEdit(recipe.id)} aria-label={`Edit ${recipe.name}`} className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1e4cd] text-[#315640]"><FiEdit2 aria-hidden="true" /></button><button onClick={() => onDelete(recipe.id)} aria-label={`Delete ${recipe.name}`} className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f8e1d6] text-[#b94a2c]"><FiTrash2 aria-hidden="true" /></button></span> : <span className="flex items-center gap-1"><FiClock aria-hidden="true" />Quick and easy</span>}</div>
      </div>
    </article>
  )
}