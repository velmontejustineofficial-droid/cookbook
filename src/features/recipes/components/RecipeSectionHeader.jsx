import { FiArrowLeft, FiBookOpen } from 'react-icons/fi'

export default function RecipeSectionHeader({ onBack, badge, eyebrow, title, description, count, countLabel, icon = <FiBookOpen aria-hidden="true" />, action }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <button onClick={onBack} aria-label="Go back" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6c7ae] bg-[#f3e5cd] text-[#315640] transition hover:bg-[#ead5b5]"><FiArrowLeft aria-hidden="true" /></button>
        <span className="rounded-full bg-[#f1e4cd] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#56745a]">{badge}</span>
      </div>
      <div className="relative mt-5 overflow-hidden rounded-[24px] bg-[#294c39] p-5 text-white shadow-sm">
        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full border-[18px] border-[#ef8a36]/30" />
        <div className="relative flex items-start justify-between gap-3">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5d98a]">{eyebrow}</p><h1 className="mt-2 text-[2rem] font-black leading-none tracking-[-0.06em]">{title}</h1><p className="mt-3 max-w-[235px] text-sm leading-5 text-white/75">{description}</p></div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f5d98a] text-xl text-[#294c39]">{icon}</div>
        </div>
        <div className="relative mt-5 flex flex-wrap items-end justify-between gap-3"><div><span className="text-3xl font-black">{count}</span><span className="ml-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">{countLabel}</span></div>{action}</div>
      </div>
    </>
  )
}