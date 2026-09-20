import WelcomeCard from './WelcomeCard.jsx'
import TrendingSection from '../recipes/TrendingSection.jsx'
import PopularRecipesSection from '../recipes/PopularRecipesSection.jsx'

export default function HomeContent() {
  return (
    <main className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
      <WelcomeCard />
      <TrendingSection />
      <PopularRecipesSection />
    </main>
  )
}