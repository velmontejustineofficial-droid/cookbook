import { useState } from 'react'
import FavoritesPage from '../../recipes/pages/FavoritesPage.jsx'
import RecipesPage from '../../recipes/pages/RecipesPage.jsx'
import CreateRecipePage from '../../recipes/pages/CreateRecipePage.jsx'
import EditRecipePage from '../../recipes/pages/EditRecipePage.jsx'
import MyRecipesPage from '../../recipes/pages/MyRecipesPage.jsx'
import DashboardHeader from '../components/DashboardHeader.jsx'
import HomeContent from '../components/HomeContent.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'

export default function DashboardPage() {
  const currentUserId = 'jane'
  const [activeTab, setActiveTab] = useState('Home')
  const [searchTerm, setSearchTerm] = useState('')
  const [editingRecipeId, setEditingRecipeId] = useState(null)

  return (
    <div className="h-dvh w-full overflow-hidden bg-[#f5efe3]">
      <div className="relative mx-auto flex h-full w-full max-w-md flex-col overflow-hidden bg-[#fbf7ef]">
        <DashboardHeader searchTerm={searchTerm} onSearchChange={setSearchTerm} onProfileClick={() => setActiveTab('Profile')} />

        {activeTab === 'Home' ? (
          <HomeContent searchTerm={searchTerm} />
        ) : (
          <main className="min-h-0 flex-1 overflow-y-auto p-4">
            {activeTab === 'Recipe' && (editingRecipeId ? <EditRecipePage recipeId={editingRecipeId} currentUserId={currentUserId} onBack={() => setEditingRecipeId(null)} /> : <RecipesPage currentUserId={currentUserId} onEdit={setEditingRecipeId} onBack={() => setActiveTab('Home')} />)}
            {activeTab === 'Profile' && <ProfilePage onBack={() => setActiveTab('Home')} />}
            {activeTab === 'My Recipe' && (editingRecipeId ? <EditRecipePage recipeId={editingRecipeId} currentUserId={currentUserId} onBack={() => setEditingRecipeId(null)} /> : <MyRecipesPage currentUserId={currentUserId} onEdit={setEditingRecipeId} onAdd={() => setActiveTab('Add Recipe')} onBack={() => setActiveTab('Home')} />)}
            {activeTab === 'Favorite' && <FavoritesPage currentUserId={currentUserId} onEdit={setEditingRecipeId} onBack={() => setActiveTab('Home')} />}
            {activeTab === 'Add Recipe' && <CreateRecipePage currentUserId={currentUserId} onBack={() => setActiveTab('Home')} />}
          </main>
        )}

        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}
