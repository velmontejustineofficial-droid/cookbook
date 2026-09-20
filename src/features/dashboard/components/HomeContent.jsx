import WelcomeCard from './WelcomeCard.jsx'
import TrendingSection from './TrendingSection.jsx'
import PopularRecipesSection from './PopularRecipesSection.jsx'

export default function HomeContent({ searchTerm }) {
  return (
    <main className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
      <WelcomeCard />
      <TrendingSection searchTerm={searchTerm} />
      <PopularRecipesSection searchTerm={searchTerm} />
    </main>
  )
}