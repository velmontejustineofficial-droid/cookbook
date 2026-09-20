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
    <div className="min-h-screen bg-[#e9e3dc] px-3 py-4">
      <div className="relative mx-auto flex h-[calc(100vh-2rem)] max-h-[844px] max-w-md flex-col overflow-hidden rounded-[32px] border border-[#d9d3cc] bg-[#f7f3ee] shadow-[0_18px_50px_rgba(52,41,30,0.12)]">
        <header className="flex items-center gap-3 border-b border-[#e1d9d1] bg-[#f9f6f2] px-4 py-3">
          <div className="flex-1 rounded-full border border-[#e4ddd6] bg-[#f2eee9] px-3 py-2.5 shadow-inner shadow-white/60">
            <div className="flex items-center gap-2 text-[#58514d]">
              <span className="text-lg">⌕</span>
              <input
                type="text"
                placeholder="Search recipe"
                className="w-full border-0 bg-transparent text-sm text-[#4d4946] placeholder:text-[#7e7772] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9c7ab] text-sm font-bold text-[#392b22] shadow-sm">
            JD
          </div>
        </header>

        {activeTab === 'Home' ? (
        <main className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
          <div className="rounded-[28px] bg-[#f1e2cf] p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b6856]">Good morning</p>
                <h1 className="mt-1 text-[2rem] font-black leading-none tracking-[-0.06em] text-[#2d2b29]">
                  Jane
                </h1>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c7ab] bg-[#f8f3ea] text-lg text-[#3d3028]">
                ♡
              </button>
            </div>

            <div className="mt-4 h-[150px] rounded-[22px] bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80')" }} />
          </div>

          <div className="rounded-[24px] border border-[#e2d9d0] bg-[#f8f6f3] p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-black tracking-[-0.04em] text-[#272421]">Trending</h2>
              <button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4f6b5b]">More</button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-1">
              {[
                { title: 'Salad Bowl', time: '12 min', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80' },
                { title: 'Pasta', time: '18 min', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80' },
                { title: 'Toast', time: '8 min', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80' },
              ].map((item) => (
                <div key={item.title} className="min-w-[150px] overflow-hidden rounded-[20px] border border-[#e8dfd7] bg-[#fffdfb]">
                  <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                  <div className="p-3">
                    <div className="font-semibold text-[#2c2a2a]">{item.title}</div>
                    <div className="mt-1 text-xs text-[#6f6762]">⏱ {item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between px-0.5">
              <h2 className="text-lg font-black tracking-[-0.04em] text-[#272421]">Popular recipes</h2>
              <button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4f6b5b]">All</button>
            </div>

            {[
              { name: 'Chicken Bowl', detail: 'Healthy • 20 min', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80' },
              { name: 'Creamy Pasta', detail: 'Comfort • 30 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80' },
            ].map((recipe) => (
              <div key={recipe.name} className="flex items-center gap-3 rounded-[20px] border border-[#e7dfd8] bg-[#f9f5f1] p-2 shadow-sm">
                <div className="h-16 w-16 rounded-[16px] bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }} />
                <div className="flex-1">
                  <div className="font-semibold text-[#2d2c2b]">{recipe.name}</div>
                  <div className="mt-1 text-xs text-[#756e69]">{recipe.detail}</div>
                </div>
                <button className="text-lg text-[#4d5d52]">♡</button>
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

        <nav className="sticky bottom-0 z-10 mt-auto w-full border-t border-[#e0d6cd] bg-[#f8f5f1]/95 px-2 py-2 backdrop-blur-sm">
          <div className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.label

              return (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={[
                    'flex min-h-[62px] flex-col items-center justify-center rounded-[18px] px-1 py-2 transition',
                    isActive ? 'bg-[#2e4a3e] text-white shadow-sm' : 'text-[#4a4441]',
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
