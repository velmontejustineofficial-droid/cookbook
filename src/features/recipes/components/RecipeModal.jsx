import { useState } from "react";

const blankRecipe = { title: "", description: "", ingredients: "" };

export default function RecipeModal({ recipe, onClose, onSave }) {
    const [form, setForm] = useState(() => recipe ? {
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients.join("\n"),
    } : blankRecipe);
    const [saving, setSaving] = useState(false);

    function updateField(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function submit(event) {
        event.preventDefault();
        setSaving(true);
        try {
            await onSave({
                title: form.title,
                description: form.description,
                ingredients: form.ingredients.split("\n").map((item) => item.trim()).filter(Boolean),
            });
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="modal-backdrop" onMouseDown={onClose}>
            <section className="modal" role="dialog" aria-modal="true" aria-labelledby="recipe-modal-title" onMouseDown={(event) => event.stopPropagation()}>
                <button className="modal-close" type="button" onClick={onClose} aria-label="Close modal">×</button>
                <p className="eyebrow">{recipe ? "Refine a recipe" : "Add to the collection"}</p>
                <h2 id="recipe-modal-title">{recipe ? "Edit recipe" : "New recipe"}</h2>
                <form className="recipe-form" onSubmit={submit}>
                    <label>Recipe name<input required name="title" value={form.title} onChange={updateField} placeholder="e.g. Sunday tomato pasta" /></label>
                    <label>Description<textarea required name="description" value={form.description} onChange={updateField} placeholder="What makes this dish special?" /></label>
                    <label>Ingredients <span>(one per line)</span><textarea required name="ingredients" value={form.ingredients} onChange={updateField} placeholder={'tomatoes\ngarlic\nolive oil'} /></label>
                    <button className="save-button" disabled={saving}>{saving ? "Saving..." : recipe ? "Save changes" : "Add recipe"}</button>
                </form>
            </section>
        </div>
    );
}
