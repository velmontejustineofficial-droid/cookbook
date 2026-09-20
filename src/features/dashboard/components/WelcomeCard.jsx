import { FiHeart } from 'react-icons/fi'

export default function WelcomeCard() {
  return (
    <section className="relative min-h-[270px] overflow-hidden rounded-[28px] bg-[#294c39] shadow-[0_14px_30px_rgba(43,36,28,0.12)]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85')" }} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,76,55,0.12)_15%,rgba(33,76,55,0.88)_100%)]" />

      <div className="relative flex min-h-[270px] flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="rounded-full border border-white/25 bg-[#fff8e9]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#315640] shadow-sm">
            Today&apos;s pick
          </div>
          <button aria-label="Add welcome recipe to favorites" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#fff8e9]/90 text-lg text-[#d7652b] shadow-sm transition hover:bg-white">
            <FiHeart aria-hidden="true" />
          </button>
        </div>

        <div className="max-w-[245px] text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f5d98a]">Good morning, Jane</p>
          <h1 className="mt-2 text-[2.1rem] font-black leading-[0.95] tracking-[-0.06em]">Make something beautiful.</h1>
          <p className="mt-3 text-sm leading-5 text-white/80">A fresh recipe is waiting for your table.</p>
        </div>
      </div>
    </section>
  )
}