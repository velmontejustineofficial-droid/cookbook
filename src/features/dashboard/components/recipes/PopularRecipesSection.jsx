import PopularRecipeCard from './PopularRecipeCard.jsx'

const popularRecipes = [
  { name: 'Chicken Bowl', detail: 'Healthy • 20 min', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80' },
  { name: 'Creamy Pasta', detail: 'Comfort • 30 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80' },
]

export default function PopularRecipesSection() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-0.5">
        <h2 className="text-lg font-black tracking-[-0.04em] text-[#2b241c]">Popular recipes</h2>
        <button className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3f6d4c]">All</button>
      </div>

      {popularRecipes.map((recipe) => <PopularRecipeCard key={recipe.name} recipe={recipe} />)}
    </section>
  )
}