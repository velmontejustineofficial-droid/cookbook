import { useState } from 'react'
import { FiImage, FiPlus, FiTrash2, FiX } from 'react-icons/fi'
import { recipeService } from '../services/recipeService.js'

const initialForm = { name: '', description: '', category: 'Healthy', time: '', image: '', ingredients: [] }

export default function CreateRecipePage({ onBack, currentUserId }) {
  const [form, setForm] = useState(initialForm)
  const [ingredientInput, setIngredientInput] = useState('')
  const [error, setError] = useState('')

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const addIngredient = () => {
    const ingredient = ingredientInput.trim()
    if (!ingredient || form.ingredients.includes(ingredient)) return
    setForm({ ...form, ingredients: [...form.ingredients, ingredient] })
    setIngredientInput('')
  }
  const removeIngredient = (ingredient) => setForm({ ...form, ingredients: form.ingredients.filter((item) => item !== ingredient) })
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.description.trim() || !form.time.trim() || form.ingredients.length === 0) {
      setError('Add a name, description, cooking time, and at least one ingredient.')
      return
    }

    try {
      await recipeService.add({ ...form, name: form.name.trim(), time: form.time.trim(), image: form.image || 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80' }, currentUserId)
      onBack()
    } catch {
      setError('Could not save recipe. Check the API and try again.')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#214c37]/45 p-4 backdrop-blur-sm">
      <div className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] shadow-2xl">
        <div className="rounded-t-[28px] bg-[#294c39] p-5 text-white">
          <div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5d98a]">Create something yours</p><h1 className="mt-2 text-2xl font-black tracking-[-0.05em]">Add Recipe</h1><p className="mt-2 text-sm text-white/70">Save a complete recipe to the cookbook.</p></div><button onClick={onBack} aria-label="Close add recipe" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"><FiX aria-hidden="true" /></button></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Recipe name<input name="name" value={form.name} onChange={updateField} placeholder="e.g. Garlic noodles" className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm font-normal normal-case tracking-normal outline-none" /></label>
          <label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Description<textarea name="description" value={form.description} onChange={updateField} rows="3" placeholder="Tell people about this recipe" className="mt-1 w-full resize-none rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm font-normal normal-case tracking-normal outline-none" /></label>
          <div className="grid grid-cols-2 gap-3"><label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Category<select name="category" value={form.category} onChange={updateField} className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-3 text-sm font-normal normal-case tracking-normal text-[#315640] outline-none"><option>Healthy</option><option>Comfort</option><option>Breakfast</option><option>Dessert</option><option>Filipino</option></select></label><label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Time<input name="time" value={form.time} onChange={updateField} placeholder="20 min" className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm font-normal normal-case tracking-normal outline-none" /></label></div>
          <div><label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Ingredients</label><div className="mt-1 flex gap-2"><input value={ingredientInput} onChange={(event) => setIngredientInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); addIngredient() } }} placeholder="e.g. garlic" className="min-w-0 flex-1 rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm outline-none" /><button type="button" onClick={addIngredient} aria-label="Add ingredient" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f1e4cd] text-[#315640]"><FiPlus aria-hidden="true" /></button></div><ul className="mt-2 space-y-2">{form.ingredients.map((ingredient) => <li key={ingredient} className="flex items-center justify-between rounded-xl bg-[#f3e5cd] px-3 py-2 text-sm text-[#34291f]"><span>{ingredient}</span><button type="button" onClick={() => removeIngredient(ingredient)} aria-label={`Remove ${ingredient}`} className="text-[#b94a2c]"><FiTrash2 aria-hidden="true" /></button></li>)}</ul></div>
          <label className="flex items-center gap-2 rounded-2xl border border-dashed border-[#d6c7ae] bg-[#f3e5cd]/60 px-3 py-3 text-sm text-[#756b5d]"><FiImage aria-hidden="true" /><input name="image" value={form.image} onChange={updateField} placeholder="Image URL (optional)" className="w-full border-0 bg-transparent text-sm outline-none" /></label>
          {error && <p className="text-sm text-[#b94a2c]">{error}</p>}
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ef8a36] px-4 py-3 text-sm font-bold text-white"><FiPlus aria-hidden="true" />Save Recipe</button>
        </form>
      </div>
    </div>
  )
}
