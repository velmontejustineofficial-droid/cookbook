import { useState } from 'react'
import { FiPlus, FiSearch, FiUser } from 'react-icons/fi'
import RecipeList from '../components/RecipeList.jsx'
import RecipeSectionHeader from '../components/RecipeSectionHeader.jsx'
import CreateRecipePage from './CreateRecipePage.jsx'
import EditRecipePage from './EditRecipePage.jsx'
import { recipeService } from '../services/recipeService.js'

export default function MyRecipesPage({ currentUserId, onBack }) {
  const [, refresh] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const [editingRecipeId, setEditingRecipeId] = useState(null)
  const ownRecipes = recipeService.getAll().filter((recipe) => recipe.ownerId === currentUserId)
  const filteredRecipes = ownRecipes.filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
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
      <RecipeSectionHeader onBack={onBack} badge="Personal shelf" eyebrow="Only yours" title="My Recipes" description="Recipes you created, saved, and can manage." count={ownRecipes.length} countLabel="recipes created" icon={<FiUser aria-hidden="true" className="text-xl" />} action={<button onClick={() => setShowCreate(true)} className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#ef8a36] px-2.5 py-2 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#d7652b] sm:px-3 sm:text-xs"><FiPlus aria-hidden="true" />New recipe</button>} />
      <label className="mt-5 flex items-center gap-2 rounded-2xl border border-[#e5dccb] bg-[#f3eee3] px-3 py-3 text-[#294c39]"><FiSearch aria-hidden="true" /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search my recipes" className="w-full border-0 bg-transparent text-sm text-[#302d28] placeholder:text-[#887e70] focus:outline-none" /></label>
      <div className="mt-5"><RecipeList recipes={filteredRecipes} onToggleFavorite={toggleFavorite} currentUserId={currentUserId} onEdit={setEditingRecipeId} onDelete={deleteRecipe} /></div>
      {showCreate && <CreateRecipePage currentUserId={currentUserId} onBack={() => { setShowCreate(false); refresh((value) => value + 1) }} />}
      {editingRecipeId && <EditRecipePage recipeId={editingRecipeId} currentUserId={currentUserId} onBack={() => { setEditingRecipeId(null); refresh((value) => value + 1) }} />}
    </div>
  )
}