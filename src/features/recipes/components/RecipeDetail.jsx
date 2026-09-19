import { Link } from "react-router-dom";

export default function RecipeDetail({ recipe, onEdit }) {
    const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];

    return (
        <article className="recipe-detail">
            <div className="detail-top"><p className="eyebrow">Recipe / {String(recipe.id).padStart(2, "0")}</p><button className="edit-button" onClick={onEdit}>Edit recipe</button></div>
            <h2>{recipe.title}</h2>
            <p className="detail-description">{recipe.description}</p>
            <div className="detail-rule" />
            <div className="ingredients-heading"><p className="eyebrow">What you’ll need</p><span>{ingredients.length} ingredients</span></div>
            <ul className="ingredients">{ingredients.map((ingredient) => <li key={ingredient}><span>✦</span>{ingredient}</li>)}</ul>
            <div className="tip"><span>✳</span><p><strong>A note from the kitchen</strong><br />Good food does not need to be complicated. Start with what you have and taste as you go.</p></div>
            <Link className="back-link" to="/recipes">← Back to collection</Link>
        </article>
    );
}
