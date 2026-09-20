import { useState } from 'react'
import { FiImage, FiPlus, FiX } from 'react-icons/fi'
import { recipeService } from '../services/recipeService.js'

export default function CreateRecipePage({ onBack, currentUserId }) {
  const [form, setForm] = useState({ name: '', category: 'Healthy', time: '', image: '' })
  const [error, setError] = useState('')
  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.time.trim()) {
      setError('Add a recipe name and cooking time.')
      return
    }
    recipeService.add({ ...form, name: form.name.trim(), time: form.time.trim(), image: form.image || 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80' }, currentUserId)
    onBack()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#214c37]/45 p-4 backdrop-blur-sm">
      <div className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] shadow-2xl">
      <div className="rounded-t-[28px] bg-[#294c39] p-5 text-white"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5d98a]">Create something yours</p><h1 className="mt-2 text-2xl font-black tracking-[-0.05em]">Add Recipe</h1><p className="mt-2 text-sm text-white/70">Save a new recipe to your cookbook.</p></div><button onClick={onBack} aria-label="Close add recipe" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"><FiX aria-hidden="true" /></button></div></div>
      <div className="p-5">
      <form onSubmit={handleSubmit} className="mt-5 space-y-3"><label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Recipe name<input name="name" value={form.name} onChange={updateField} placeholder="e.g. Garlic noodles" className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm font-normal normal-case tracking-normal outline-none" /></label><div className="grid grid-cols-2 gap-3"><label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Category<select name="category" value={form.category} onChange={updateField} className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-3 text-sm font-normal normal-case tracking-normal text-[#315640] outline-none"><option>Healthy</option><option>Comfort</option><option>Breakfast</option><option>Dessert</option></select></label><label className="block text-xs font-bold uppercase tracking-[0.1em] text-[#56745a]">Time<input name="time" value={form.time} onChange={updateField} placeholder="20 min" className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 text-sm font-normal normal-case tracking-normal outline-none" /></label></div><label className="flex items-center gap-2 rounded-2xl border border-dashed border-[#d6c7ae] bg-[#f3e5cd]/60 px-3 py-3 text-sm text-[#756b5d]"><FiImage aria-hidden="true" /><input name="image" value={form.image} onChange={updateField} placeholder="Image URL (optional)" className="w-full border-0 bg-transparent text-sm outline-none" /></label>{error && <p className="text-sm text-[#b94a2c]">{error}</p>}<button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ef8a36] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#d7652b]"><FiPlus aria-hidden="true" />Save Recipe</button></form>
      </div></div>
    </div>
  )
}