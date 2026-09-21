import { useState } from 'react'
import { FiHeart, FiSearch, FiSliders } from 'react-icons/fi'
import RecipeList from '../components/RecipeList.jsx'
import RecipeSectionHeader from '../components/RecipeSectionHeader.jsx'
import RecipeDetailsModal from '../components/RecipeDetailsModal.jsx'
import useRecipes from '../hooks/useRecipes.js'
import { recipeService } from '../services/recipeService.js'

export default function FavoritesPage({ onBack, currentUserId, onEdit }) {
  const { recipes, loading, reload } = useRecipes()
  const [, refresh] = useState(0)
  const [viewingRecipe, setViewingRecipe] = useState(null)
  const favorites = recipes.filter((recipe) => recipe.isFavorite)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', ...new Set(favorites.map((recipe) => recipe.category))]
  const filteredFavorites = favorites.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const toggleFavorite = (id) => { recipeService.toggleFavorite(id); refresh((value) => value + 1) }
  const deleteRecipe = async (id) => {
    if (!window.confirm('Delete this recipe?')) return
    await recipeService.remove(id, currentUserId)
    await reload()
    refresh((value) => value + 1)
  }

  return (
    <div className="w-full rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] p-4 shadow-sm">
      <RecipeSectionHeader onBack={onBack} badge="Saved recipes" eyebrow="Your personal shelf" title="Favorites" description="Recipes worth making again." count={favorites.length} countLabel="saved" icon={<FiHeart aria-hidden="true" fill="currentColor" />} />
      {loading ? <p className="mt-5 text-sm text-[#756b5d]">Loading recipes...</p> : favorites.length > 0 ? <>
        <div className="mt-6 space-y-3">
          <label className="flex items-center gap-2 rounded-2xl border border-[#e5dccb] bg-[#f3eee3] px-3 py-3 text-[#294c39]"><FiSearch aria-hidden="true" /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search favorites" className="w-full border-0 bg-transparent text-sm text-[#302d28] placeholder:text-[#887e70] focus:outline-none" /></label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1"><FiSliders aria-hidden="true" className="shrink-0 text-[#56745a]" />{categories.map((category) => <button key={category} onClick={() => setSelectedCategory(category)} className={['shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition', selectedCategory === category ? 'bg-[#214c37] text-white' : 'bg-[#f1e4cd] text-[#56745a]'].join(' ')}>{category}</button>)}</div>
        </div>
        <div className="mt-5"><RecipeList recipes={filteredFavorites} onToggleFavorite={toggleFavorite} currentUserId={currentUserId} onEdit={onEdit} onDelete={deleteRecipe} onView={setViewingRecipe} /></div>
      </> : <div className="mt-8 rounded-[24px] border border-dashed border-[#d6c7ae] bg-[#f3e5cd]/50 px-5 py-10 text-center"><FiHeart aria-hidden="true" className="mx-auto text-3xl text-[#d7652b]" /><h2 className="mt-3 font-bold text-[#34291f]">Your shelf is waiting</h2><p className="mt-1 text-sm text-[#756b5d]">Tap the heart on a recipe to save it here.</p></div>}
      <RecipeDetailsModal recipe={viewingRecipe} currentUserId={currentUserId} onClose={() => setViewingRecipe(null)} />
    </div>
  )
}