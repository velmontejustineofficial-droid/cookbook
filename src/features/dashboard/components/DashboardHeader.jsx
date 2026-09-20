import { FiSearch } from 'react-icons/fi'

export default function DashboardHeader({ searchTerm, onSearchChange, onProfileClick }) {
  return (
    <header className="flex items-center gap-3 border-b border-[#e7dfd0] bg-[#fffaf0] px-4 py-3">
      <div className="flex-1 rounded-full border border-[#e5dccb] bg-[#f3eee3] px-3 py-2.5 shadow-inner shadow-white/60">
        <div className="flex items-center gap-2 text-[#294c39]">
          <FiSearch aria-hidden="true" className="text-lg" />
          <input value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} type="search" placeholder="Search recipe" className="w-full border-0 bg-transparent text-sm text-[#302d28] placeholder:text-[#887e70] focus:outline-none" />
        </div>
      </div>
      <button onClick={onProfileClick} aria-label="Open profile" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7bd4f] text-sm font-bold text-[#294c39] shadow-sm transition hover:scale-105">JD</button>
    </header>
  )
}