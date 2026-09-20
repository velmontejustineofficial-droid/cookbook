const recipes = [
  { id: 1, name: 'Salad Bowl', category: 'Healthy', time: '12 min', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=700&q=80', isFavorite: true },
  { id: 2, name: 'Pasta', category: 'Comfort', time: '18 min', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=700&q=80' },
  { id: 3, name: 'Avocado Toast', category: 'Breakfast', time: '8 min', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80' },
  { id: 4, name: 'Chicken Bowl', category: 'Healthy', time: '20 min', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80', isFavorite: true },
  { id: 5, name: 'Creamy Pasta', category: 'Comfort', time: '30 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80' },
  { id: 6, name: 'Berry Pancakes', category: 'Breakfast', time: '16 min', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80' },
]

export const recipeService = {
  getAll() {
    return recipes
  },
  getFavorites() {
    return recipes.filter((recipe) => recipe.isFavorite)
  },
  toggleFavorite(id) {
    const recipe = recipes.find((item) => item.id === id)
    if (recipe) recipe.isFavorite = !recipe.isFavorite
    return recipe
  },
  add(recipe) {
    const newRecipe = { ...recipe, id: Date.now(), isFavorite: false }
    recipes.push(newRecipe)
    return newRecipe
  },
  getById(id) {
    return recipes.find((recipe) => recipe.id === id) || null
  },
}
