import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import RecipeList from '../components/RecipeList.jsx'
import { recipeService } from '../services/recipeService.js'

export default function FavoritesPage({ onBack }) {
  const [, refresh] = useState(0)
  const favorites = recipeService.getFavorites()
  const toggleFavorite = (id) => { recipeService.toggleFavorite(id); refresh((value) => value + 1) }

  return <div className="w-full rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] p-4 shadow-sm"><button onClick={onBack} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-2 text-sm font-medium text-[#315640]"><FiArrowLeft aria-hidden="true" />Back</button><div className="flex items-end justify-between gap-3"><div><h1 className="text-2xl font-black tracking-[-0.05em] text-[#2b241c]">Favorites</h1><p className="mt-2 text-sm text-[#756b5d]">Your saved recipes in one place.</p></div><span className="text-xs font-semibold text-[#3f6d4c]">{favorites.length} saved</span></div><div className="mt-5"><RecipeList recipes={favorites} onToggleFavorite={toggleFavorite} /></div></div>
}