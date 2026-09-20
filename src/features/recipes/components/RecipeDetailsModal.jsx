import { FiClock, FiX } from 'react-icons/fi'

export default function RecipeDetailsModal({ recipe, currentUserId, onClose }) {
  if (!recipe) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#214c37]/45 p-4 backdrop-blur-sm">
      <div className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] shadow-2xl">
        <div className="relative h-44 bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#214c37]/85 to-transparent" />
          <button onClick={onClose} aria-label="Close recipe details" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8e9]/90 text-[#315640]"><FiX aria-hidden="true" /></button>
          <div className="absolute bottom-4 left-5 right-5 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f5d98a]">{recipe.category}</p><h2 className="mt-1 text-2xl font-black tracking-[-0.05em]">{recipe.name}</h2></div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3 text-xs text-[#756b5d]"><span className="flex items-center gap-1"><FiClock aria-hidden="true" />{recipe.time}</span><span className="rounded-full bg-[#f1e4cd] px-2.5 py-1 font-semibold text-[#56745a]">{recipe.ownerId === currentUserId ? 'Your recipe' : 'Community recipe'}</span></div>
          <p className="mt-4 text-sm leading-6 text-[#756b5d]">{recipe.description || 'A delicious recipe ready to add to your cookbook.'}</p>
          <h3 className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#2b241c]">Ingredients</h3>
          {recipe.ingredients?.length ? <ul className="mt-3 grid gap-2 sm:grid-cols-2">{recipe.ingredients.map((ingredient) => <li key={ingredient} className="rounded-xl bg-[#f3e5cd] px-3 py-2 text-sm text-[#34291f]">{ingredient}</li>)}</ul> : <p className="mt-3 rounded-xl bg-[#f3e5cd] px-3 py-2 text-sm text-[#756b5d]">Ingredients are not available for this recipe yet.</p>}
        </div>
      </div>
    </div>
  )
}