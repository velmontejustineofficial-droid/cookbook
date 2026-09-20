import { useState } from 'react'
import { FiSearch, FiSliders } from 'react-icons/fi'
import RecipeList from '../components/RecipeList.jsx'
import RecipeSectionHeader from '../components/RecipeSectionHeader.jsx'
import RecipeDetailsModal from '../components/RecipeDetailsModal.jsx'
import useRecipes from '../hooks/useRecipes.js'
import { recipeService } from '../services/recipeService.js'

export default function RecipesPage({ onBack, currentUserId, onEdit }) {
  const { recipes, loading } = useRecipes()
  const categories = ['All', ...new Set(recipes.map((recipe) => recipe.category))]
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [, refresh] = useState(0)
  const [viewingRecipe, setViewingRecipe] = useState(null)
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const toggleFavorite = (id) => {
    recipeService.toggleFavorite(id)
    refresh((value) => value + 1)
  }
  const deleteRecipe = (id) => {
    if (window.confirm('Delete this recipe?')) recipeService.remove(id, currentUserId)
    refresh((value) => value + 1)
  }

  return (
    <div className="w-full rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] p-4 shadow-sm">
      <RecipeSectionHeader onBack={onBack} badge="Cookbook" eyebrow="Your collection" title="All recipes" description="Find something delicious to make." count={filteredRecipes.length} countLabel="recipes" />
      <div className="mt-6 space-y-3">
        <label className="flex items-center gap-2 rounded-2xl border border-[#e5dccb] bg-[#f3eee3] px-3 py-3 text-[#294c39]"><FiSearch aria-hidden="true" /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search recipes" className="w-full border-0 bg-transparent text-sm text-[#302d28] placeholder:text-[#887e70] focus:outline-none" /></label>
        <div className="flex items-center gap-2 overflow-x-auto pb-1"><FiSliders aria-hidden="true" className="shrink-0 text-[#56745a]" />{categories.map((category) => <button key={category} onClick={() => setSelectedCategory(category)} className={['shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition', selectedCategory === category ? 'bg-[#214c37] text-white' : 'bg-[#f1e4cd] text-[#56745a]'].join(' ')}>{category}</button>)}</div>
      </div>
      {loading && <p className="mt-4 text-xs text-[#756b5d]">Loading recipes...</p>}
      <div className="mt-5"><RecipeList recipes={filteredRecipes} onToggleFavorite={toggleFavorite} currentUserId={currentUserId} onEdit={onEdit} onDelete={deleteRecipe} onView={setViewingRecipe} /></div>
      <RecipeDetailsModal recipe={viewingRecipe} currentUserId={currentUserId} onClose={() => setViewingRecipe(null)} />
    </div>
  )
}