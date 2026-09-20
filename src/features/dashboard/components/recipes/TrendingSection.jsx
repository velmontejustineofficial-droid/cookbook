import TrendingRecipeCard from './TrendingRecipeCard.jsx'

const trendingRecipes = [
  { title: 'Salad Bowl', time: '12 min', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80' },
  { title: 'Pasta', time: '18 min', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80' },
  { title: 'Toast', time: '8 min', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80' },
]

export default function TrendingSection() {
  return (
    <section className="rounded-[24px] border border-[#e4dac9] bg-[#fffaf1] p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-black tracking-[-0.04em] text-[#2b241c]">Trending</h2>
        <button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3f6d4c]">More</button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {trendingRecipes.map((recipe) => <TrendingRecipeCard key={recipe.title} recipe={recipe} />)}
      </div>
    </section>
  )
}