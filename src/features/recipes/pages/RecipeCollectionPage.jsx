import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createRecipe, getRecipes, updateRecipe } from "../api/recipesApi.js";
import RecipeList from "../components/RecipeList.jsx";
import RecipeModal from "../components/RecipeModal.jsx";

export default function RecipeCollectionPage() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [modalRecipe, setModalRecipe] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const newRecipeRequested = searchParams.get("new") === "true";

    useEffect(() => {
        let active = true;
        getRecipes().then((data) => {
            if (active) { setRecipes(data); setError(""); }
        }).catch((requestError) => {
            if (active) setError(requestError.message);
        }).finally(() => {
            if (active) setLoading(false);
        });
        return () => { active = false; };
    }, []);

    async function saveRecipe(recipe) {
        try {
            await (modalRecipe ? updateRecipe(modalRecipe.id, recipe) : createRecipe(recipe));
            setLoading(true);
            const refreshedRecipes = await getRecipes();
            setRecipes(refreshedRecipes);
            setLoading(false);
            setModalRecipe(undefined);
            setSearchParams({});
        } catch (requestError) { setError(requestError.message); }
    }

    return <>
        <section className="intro"><p className="eyebrow">A small collection of good things</p><h1>Cook something<br /><em>worth remembering.</em></h1><p className="intro-copy">Keep your favorite recipes close, from weeknight staples to the dishes that turn a table into a gathering.</p></section>
        <section className="workspace"><RecipeList recipes={recipes} search={search} onSearch={setSearch} /><section className="recipe-panel">{error && <div className="error-banner">{error}</div>}{loading ? <p className="muted">Gathering recipes...</p> : <p className="muted">Choose a recipe to see the details.</p>}</section></section>
        {(modalRecipe !== undefined || newRecipeRequested) && <RecipeModal recipe={modalRecipe ?? null} onClose={() => { setModalRecipe(undefined); setSearchParams({}); }} onSave={saveRecipe} />}
        <button className="floating-new" onClick={() => setModalRecipe(null)}>+ New recipe</button>
    </>;
}
