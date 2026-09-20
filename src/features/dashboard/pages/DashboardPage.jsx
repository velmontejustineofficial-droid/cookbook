import { useState } from 'react'
import SettingsPage from '../../settings/SettingsPage.jsx'
import FavoritesPage from '../../favorites/FavoritesPage.jsx'
import RecipePage from '../../recipe/RecipePage.jsx'
import AddRecipePage from '../../recipe/AddRecipePage.jsx'
import DashboardHeader from '../components/layout/DashboardHeader.jsx'
import HomeContent from '../components/home/HomeContent.jsx'
import BottomNavigation from '../components/layout/BottomNavigation.jsx'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Home')

  return (
    <div className="h-dvh w-full overflow-hidden bg-[#f5efe3]">
      <div className="relative mx-auto flex h-full w-full max-w-md flex-col overflow-hidden bg-[#fbf7ef]">
        <DashboardHeader />

        {activeTab === 'Home' ? (
          <HomeContent />
        ) : (
          <main className="min-h-0 flex-1 overflow-y-auto p-4">
            {activeTab === 'Settings' && <SettingsPage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Recipe' && <RecipePage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Favorite' && <FavoritesPage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Add Recipe' && <AddRecipePage onBack={() => setActiveTab('Home')} />}
          </main>
        )}

        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
