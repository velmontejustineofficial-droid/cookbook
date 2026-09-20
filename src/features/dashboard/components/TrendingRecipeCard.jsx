import { FiClock, FiHeart } from 'react-icons/fi'

export default function TrendingRecipeCard({ recipe, rank }) {
  return (
    <article className="relative min-w-[174px] overflow-hidden rounded-[22px] border border-[#eadfcd] bg-[#fffdf8] shadow-sm">
      <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }} />
      <div className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#f5d98a] text-xs font-black text-[#294c39] shadow-sm">0{rank}</div>
      <button aria-label={`Favorite ${recipe.title}`} className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#fff8e9]/90 text-[#d7652b] shadow-sm"><FiHeart aria-hidden="true" /></button>
      <div className="p-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#56745a]">{recipe.category}</p>
        <div className="mt-1 font-bold text-[#34291f]">{recipe.title}</div>
        <div className="mt-2 flex items-center gap-1 text-xs text-[#756b5d]"><FiClock aria-hidden="true" />{recipe.time}</div>
      </div>
    </article>
  )
}