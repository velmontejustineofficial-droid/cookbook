import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe, updateRecipe } from "../api/recipesApi.js";
import RecipeDetail from "../components/RecipeDetail.jsx";
import RecipeModal from "../components/RecipeModal.jsx";

export default function RecipeDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getRecipe(id).then(setRecipe).catch((requestError) => setError(requestError.message));
    }, [id]);

    async function saveRecipe(values) {
        try {
            setRecipe(await updateRecipe(id, values));
            setEditing(false);
        } catch (requestError) { setError(requestError.message); }
    }

    return <section className="recipe-panel detail-page">{error && <div className="error-banner">{error}</div>}{recipe ? <RecipeDetail recipe={recipe} onEdit={() => setEditing(true)} /> : !error && <p className="muted">Loading recipe...</p>}{editing && <RecipeModal recipe={recipe} onClose={() => setEditing(false)} onSave={saveRecipe} />}<button className="back-link-button" onClick={() => navigate("/recipes")}>← Back to collection</button></section>;
}
