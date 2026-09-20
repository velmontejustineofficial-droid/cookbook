export default function TrendingRecipeCard({ recipe }) {
  return (
    <div className="min-w-[150px] overflow-hidden rounded-[20px] border border-[#eadfcd] bg-[#fffdf8]">
      <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url('${recipe.image}')` }} />
      <div className="p-3">
        <div className="font-semibold text-[#34291f]">{recipe.title}</div>
        <div className="mt-1 text-xs text-[#756b5d]">⏱ {recipe.time}</div>
      </div>
    </div>
  )
}