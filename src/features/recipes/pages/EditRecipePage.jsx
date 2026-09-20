import { useState } from 'react'
import { FiEdit2, FiX } from 'react-icons/fi'
import { recipeService } from '../services/recipeService.js'

export default function EditRecipePage({ recipeId, currentUserId, onBack }) {
  const recipe = recipeService.getById(recipeId)
  const [form, setForm] = useState(recipe ? { name: recipe.name, category: recipe.category, time: recipe.time, image: recipe.image } : null)
  const [error, setError] = useState('')

  if (!recipe || recipe.ownerId !== currentUserId || !form) {
    return <div className="rounded-[24px] border border-[#eadfcd] bg-[#fffaf1] p-5 text-sm text-[#b94a2c]">You cannot edit this recipe.</div>
  }

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.time.trim()) {
      setError('Add a recipe name and cooking time.')
      return
    }
    recipeService.update(recipeId, { ...form, name: form.name.trim(), time: form.time.trim() }, currentUserId)
    onBack()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#214c37]/45 p-4 backdrop-blur-sm">
      <div className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] shadow-2xl">
      <div className="rounded-t-[28px] bg-[#294c39] p-5 text-white"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5d98a]">Your recipe</p><h1 className="mt-2 text-2xl font-black tracking-[-0.05em]">Edit Recipe</h1><p className="mt-2 text-sm text-white/70">Update your recipe details.</p></div><button onClick={onBack} aria-label="Close edit recipe" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"><FiX aria-hidden="true" /></button></div></div>
      <div className="p-5">
      <form onSubmit={handleSubmit} className="mt-5 space-y-3"><input name="name" value={form.name} onChange={updateField} placeholder="Recipe name" className="w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm outline-none" /><div className="grid grid-cols-2 gap-3"><select name="category" value={form.category} onChange={updateField} className="rounded-2xl border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-3 text-sm text-[#315640] outline-none"><option>Healthy</option><option>Comfort</option><option>Breakfast</option><option>Dessert</option></select><input name="time" value={form.time} onChange={updateField} placeholder="20 min" className="rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm outline-none" /></div><input name="image" value={form.image} onChange={updateField} placeholder="Image URL" className="w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm outline-none" />{error && <p className="text-sm text-[#b94a2c]">{error}</p>}<button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#214c37] px-4 py-3 text-sm font-semibold text-white"><FiEdit2 aria-hidden="true" />Update Recipe</button></form>
      </div></div>
    </div>
  )
}