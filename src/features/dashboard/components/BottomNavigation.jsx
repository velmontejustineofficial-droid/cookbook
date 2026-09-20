import { FiBookOpen, FiHeart, FiHome, FiPlus, FiSettings } from 'react-icons/fi'

const navItems = [
  { label: 'Home', icon: FiHome },
  { label: 'Settings', icon: FiSettings },
  { label: 'Recipe', icon: FiBookOpen },
  { label: 'Favorite', icon: FiHeart },
  { label: 'Add Recipe', icon: FiPlus },
]

export default function BottomNavigation({ activeTab, onTabChange }) {
  return (
    <nav className="sticky bottom-0 z-10 mt-auto w-full border-t border-[#d6c7ae] bg-[#214c37]/95 px-2 py-2 backdrop-blur-sm">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.label
          const Icon = item.icon

          return (
            <button key={item.label} onClick={() => onTabChange(item.label)} className={['flex min-h-[62px] flex-col items-center justify-center rounded-[18px] px-1 py-2 transition', isActive ? 'bg-[#ef8a36] text-white shadow-sm' : 'text-[#f8efd9]'].join(' ')}>
              <Icon aria-hidden="true" className="text-lg" />
              <span className="mt-1 text-[9px] font-medium tracking-[0.04em]">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}