export default function FavoritesPage({ onBack }) {
  return (
    <div className="w-full rounded-[28px] border border-[#eadfcd] bg-[#fffaf1] p-6 shadow-sm">
        <button
          onClick={onBack}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6c7ae] bg-[#f3e5cd] px-3 py-2 text-sm font-medium text-[#315640]"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-black tracking-[-0.05em] text-[#2b241c]">Favorites</h1>
        <p className="mt-2 text-sm text-[#756b5d]">This page is empty for now.</p>
    </div>
  )
}
