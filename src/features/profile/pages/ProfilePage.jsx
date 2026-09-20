import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'

export default function ProfilePage({ onBack }) {
  const [name, setName] = useState('Jane')
  const [email, setEmail] = useState('jane@example.com')
  const [saved, setSaved] = useState(false)

  return (
    <div className="w-full rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] p-4 shadow-sm">
      <button onClick={onBack} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-2 text-sm font-medium text-[#315640]"><FiArrowLeft aria-hidden="true" />Back</button>
      <h1 className="text-2xl font-black tracking-[-0.05em] text-[#2b241c]">Settings</h1>
      <p className="mt-2 text-sm text-[#756b5d]">Manage your cookbook profile.</p>
      <form onSubmit={(event) => { event.preventDefault(); setSaved(true) }} className="mt-5 space-y-3">
        <label className="block text-sm font-semibold text-[#34291f]">Name<input value={name} onChange={(event) => setName(event.target.value)} className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 font-normal outline-none" /></label>
        <label className="block text-sm font-semibold text-[#34291f]">Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 w-full rounded-2xl border border-[#d6c7ae] bg-[#fffdf8] px-3 py-3 font-normal outline-none" /></label>
        <label className="flex items-center gap-2 rounded-2xl border border-[#d6c7ae] bg-[#f3e5cd] p-3 text-sm text-[#34291f]"><input type="checkbox" defaultChecked />Email me new recipe ideas</label>
        <button type="submit" className="w-full rounded-2xl bg-[#214c37] px-4 py-3 text-sm font-semibold text-white">Save Settings</button>
        {saved && <p className="text-sm text-[#3f6d4c]">Settings saved.</p>}
      </form>
    </div>
  )
}