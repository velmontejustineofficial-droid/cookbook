import { useState } from 'react'
import SettingsPage from '../settings/SettingsPage.jsx'
import FavoritesPage from '../favorites/FavoritesPage.jsx'
import RecipePage from '../recipe/RecipePage.jsx'
import AddRecipePage from '../recipe/AddRecipePage.jsx'

const navItems = [
  { label: 'Home', icon: '⌂' },
  { label: 'Settings', icon: '⚙' },
  { label: 'Recipe', icon: '☰' },
  { label: 'Favorite', icon: '♡' },
  { label: 'Add Recipe', icon: '+' },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Home')

  return (
    <div className="h-dvh w-full overflow-hidden bg-[#f5efe3]">
      <div className="relative mx-auto flex h-full w-full max-w-md flex-col overflow-hidden bg-[#fbf7ef]">
        <header className="flex items-center gap-3 border-b border-[#e7dfd0] bg-[#fffaf0] px-4 py-3">
          <div className="flex-1 rounded-full border border-[#e5dccb] bg-[#f3eee3] px-3 py-2.5 shadow-inner shadow-white/60">
            <div className="flex items-center gap-2 text-[#294c39]">
              <span className="text-lg">⌕</span>
              <input
                type="text"
                placeholder="Search recipe"
                className="w-full border-0 bg-transparent text-sm text-[#302d28] placeholder:text-[#887e70] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7bd4f] text-sm font-bold text-[#294c39] shadow-sm">
            JD
          </div>
        </header>

        {activeTab === 'Home' ? (
        <main className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
          <div className="rounded-[28px] bg-[#f1e4cd] p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#56745a]">Good morning</p>
                <h1 className="mt-1 text-[2rem] font-black leading-none tracking-[-0.06em] text-[#2b241c]">
                  Jane
                </h1>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7ab] bg-[#fff8e9] text-lg text-[#315640]">
                ♡
              </button>
            </div>

            <div className="mt-4 h-[150px] rounded-[22px] bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80')" }} />
          </div>

          <div className="rounded-[24px] border border-[#e4dac9] bg-[#fffaf1] p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-black tracking-[-0.04em] text-[#2b241c]">Trending</h2>
              <button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3f6d4c]">More</button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-1">
              {[
                { title: 'Salad Bowl', time: '12 min', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80' },
                { title: 'Pasta', time: '18 min', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80' },
                { title: 'Toast', time: '8 min', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80' },
              ].map((item) => (
                <div key={item.title} className="min-w-[150px] overflow-hidden rounded-[20px] border border-[#eadfcd] bg-[#fffdf8]">
                  <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                  <div className="p-3">
                    <div className="font-semibold text-[#34291f]">{item.title}</div>
                    <div className="mt-1 text-xs text-[#756b5d]">⏱ {item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between px-0.5">
              <h2 className="text-lg font-black tracking-[-0.04em] text-[#2b241c]">Popular recipes</h2>
              <button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3f6d4c]">All</button>
            </div>

            {[
              { name: 'Chicken Bowl', detail: 'Healthy • 20 min', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80' },
              { name: 'Creamy Pasta', detail: 'Comfort • 30 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80' },
            ].map((recipe) => (
              <div key={recipe.name} className="flex items-center gap-3 rounded-[20px] border border-[#eadfcd] bg-[#fffaf1] p-2 shadow-sm">
                <div className="h-16 w-16 rounded-[16px] bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }} />
                <div className="flex-1">
                  <div className="font-semibold text-[#34291f]">{recipe.name}</div>
                  <div className="mt-1 text-xs text-[#756b5d]">{recipe.detail}</div>
                </div>
                <button className="text-lg text-[#d7652b]">♡</button>
              </div>
            ))}
          </div>
        </main>
        ) : (
          <main className="min-h-0 flex-1 overflow-y-auto p-4">
            {activeTab === 'Settings' && <SettingsPage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Recipe' && <RecipePage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Favorite' && <FavoritesPage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Add Recipe' && <AddRecipePage onBack={() => setActiveTab('Home')} />}
          </main>
        )}

        <nav className="sticky bottom-0 z-10 mt-auto w-full border-t border-[#d6c7ae] bg-[#214c37]/95 px-2 py-2 backdrop-blur-sm">
          <div className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.label

              return (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={[
                    'flex min-h-[62px] flex-col items-center justify-center rounded-[18px] px-1 py-2 transition',
                    isActive ? 'bg-[#ef8a36] text-white shadow-sm' : 'text-[#f8efd9]',
                  ].join(' ')}
                >
                  <span className="text-lg leading-none">{item.icon}</span>
                  <span className="mt-1 text-[9px] font-medium tracking-[0.04em]">{item.label}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}
