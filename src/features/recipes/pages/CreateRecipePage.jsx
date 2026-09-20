import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { recipeService } from '../services/recipeService.js'

export default function CreateRecipePage({ onBack }) {
  const [form, setForm] = useState({ name: '', category: 'Healthy', time: '', image: '' })
  const [error, setError] = useState('')
  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.time.trim()) {
      setError('Add a recipe name and cooking time.')
      return
    }
    recipeService.add({ ...form, name: form.name.trim(), time: form.time.trim(), image: form.image || 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80' })
    onBack()
  }

  return (
    <div className="w-full rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] p-4 shadow-sm">
      <button onClick={onBack} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-2 text-sm font-medium text-[#315640]"><FiArrowLeft aria-hidden="true" />Back</button>
      <h1 className="text-2xl font-black tracking-[-0.05em] text-[#2b241c]">Add Recipe</h1><p className="mt-2 text-sm text-[#756b5d]">Save a new recipe to your cookbook.</p>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3"><input name="name" value={form.name} onChange={updateField} placeholder="Recipe name" className="w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm outline-none" /><div className="grid grid-cols-2 gap-3"><select name="category" value={form.category} onChange={updateField} className="rounded-2xl border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-3 text-sm text-[#315640] outline-none"><option>Healthy</option><option>Comfort</option><option>Breakfast</option><option>Dessert</option></select><input name="time" value={form.time} onChange={updateField} placeholder="20 min" className="rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm outline-none" /></div><input name="image" value={form.image} onChange={updateField} placeholder="Image URL (optional)" className="w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm outline-none" />{error && <p className="text-sm text-[#b94a2c]">{error}</p>}<button type="submit" className="w-full rounded-2xl bg-[#214c37] px-4 py-3 text-sm font-semibold text-white">Save Recipe</button></form>
    </div>
  )
}