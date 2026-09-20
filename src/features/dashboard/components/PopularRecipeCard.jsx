import { FiHeart } from 'react-icons/fi'

export default function PopularRecipeCard({ recipe }) {
  return <div className="flex items-center gap-3 rounded-[20px] border border-[#eadfcd] bg-[#fffaf1] p-2 shadow-sm"><div className="h-16 w-16 rounded-[16px] bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }} /><div className="flex-1"><div className="font-semibold text-[#34291f]">{recipe.name}</div><div className="mt-1 text-xs text-[#756b5d]">{recipe.detail}</div></div><button aria-label={`Add ${recipe.name} to favorites`} className="text-lg text-[#d7652b]"><FiHeart aria-hidden="true" /></button></div>
}