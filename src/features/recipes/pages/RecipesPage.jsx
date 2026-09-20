import { useState } from 'react'
import { FiArrowLeft, FiSearch } from 'react-icons/fi'
import RecipeList from '../components/RecipeList.jsx'
import useRecipes from '../hooks/useRecipes.js'
import { recipeService } from '../services/recipeService.js'

export default function RecipesPage({ onBack }) {
  const recipes = useRecipes()
  const categories = ['All', ...new Set(recipes.map((recipe) => recipe.category))]
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [, refresh] = useState(0)
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const toggleFavorite = (id) => {
    recipeService.toggleFavorite(id)
    refresh((value) => value + 1)
  }

  return (
    <div className="w-full rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] p-4 shadow-sm">
      <button onClick={onBack} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-2 text-sm font-medium text-[#315640]"><FiArrowLeft aria-hidden="true" />Back</button>
      <div className="flex items-end justify-between gap-3"><div><h1 className="text-2xl font-black tracking-[-0.05em] text-[#2b241c]">All recipes</h1><p className="mt-2 text-sm text-[#756b5d]">Find something delicious to make.</p></div><span className="text-xs font-semibold text-[#3f6d4c]">{filteredRecipes.length} recipes</span></div>
      <div className="mt-5 space-y-3">
        <label className="flex items-center gap-2 rounded-full border border-[#e5dccb] bg-[#f3eee3] px-3 py-2.5 text-[#294c39]"><FiSearch aria-hidden="true" /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search recipes" className="w-full border-0 bg-transparent text-sm text-[#302d28] placeholder:text-[#887e70] focus:outline-none" /></label>
        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="w-full rounded-full border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-2 text-sm text-[#315640] outline-none">{categories.map((category) => <option key={category} value={category}>{category}</option>)}</select>
      </div>
      <div className="mt-5"><RecipeList recipes={filteredRecipes} onToggleFavorite={toggleFavorite} /></div>
    </div>
  )
}