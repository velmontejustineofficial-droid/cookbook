import { Link } from "react-router-dom";

export default function RecipeList({ recipes, search, onSearch }) {
    const visibleRecipes = recipes.filter((recipe) => {
        const query = search.toLowerCase().trim();
        return !query || `${recipe.title} ${recipe.description}`.toLowerCase().includes(query);
    });

    return (
        <aside className="recipe-list">
            <div className="list-heading"><div><p className="eyebrow">Your collection</p><h2>{recipes.length} recipes</h2></div><span className="count">{visibleRecipes.length}</span></div>
            <label className="search">⌕ <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search recipes" /></label>
            {visibleRecipes.map((recipe, index) => <Link className="recipe-row" to={`/recipes/${recipe.id}`} key={recipe.id}><span className="recipe-number">0{index + 1}</span><span><strong>{recipe.title}</strong><small>{(recipe.ingredients || []).slice(0, 3).join(" · ")}</small></span><span>↗</span></Link>)}
        </aside>
    );
}
