import { FiHeart } from 'react-icons/fi'

export default function WelcomeCard() {
  return (
    <div className="rounded-[28px] bg-[#f1e4cd] p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#56745a]">Good morning</p>
          <h1 className="mt-1 text-[2rem] font-black leading-none tracking-[-0.06em] text-[#2b241c]">Jane</h1>
        </div>
        <button aria-label="Add welcome recipe to favorites" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7ab] bg-[#fff8e9] text-lg text-[#315640]"><FiHeart aria-hidden="true" /></button>
      </div>
      <div className="mt-4 h-[150px] rounded-[22px] bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80')" }} />
    </div>
  )
}