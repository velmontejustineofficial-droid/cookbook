export default function SettingsPage({ onBack }) {
  return (
    <div className="w-full rounded-[28px] border border-[#d8d2cc] bg-[#f7f5f2] p-6 shadow-sm">
        <button
          onClick={onBack}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7d0c9] bg-[#f1eee9] px-3 py-2 text-sm font-medium text-[#2c2b2a]"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-black tracking-[-0.05em] text-[#2a2c2a]">Settings</h1>
        <p className="mt-2 text-sm text-[#665f5a]">This page is empty for now.</p>
    </div>
  )
}
