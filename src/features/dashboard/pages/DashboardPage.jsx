import { useState } from 'react'
import ProfilePage from '../../profile/pages/ProfilePage.jsx'
import FavoritesPage from '../../recipes/pages/FavoritesPage.jsx'
import RecipesPage from '../../recipes/pages/RecipesPage.jsx'
import CreateRecipePage from '../../recipes/pages/CreateRecipePage.jsx'
import DashboardHeader from '../components/DashboardHeader.jsx'
import HomeContent from '../components/HomeContent.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Home')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="h-dvh w-full overflow-hidden bg-[#f5efe3]">
      <div className="relative mx-auto flex h-full w-full max-w-md flex-col overflow-hidden bg-[#fbf7ef]">
        <DashboardHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {activeTab === 'Home' ? (
          <HomeContent searchTerm={searchTerm} />
        ) : (
          <main className="min-h-0 flex-1 overflow-y-auto p-4">
            {activeTab === 'Settings' && <ProfilePage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Recipe' && <RecipesPage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Favorite' && <FavoritesPage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Add Recipe' && <CreateRecipePage onBack={() => setActiveTab('Home')} />}
          </main>
        )}

        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
