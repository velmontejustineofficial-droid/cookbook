const API_URL = import.meta.env.VITE_API_URL || "https://cook-book-api-tau.vercel.app/api";

async function request(path, options) {
    const response = await fetch(`${API_URL}${path}`, options);
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Recipe request failed");
    return result.data;
}

export function getRecipes() {
    return request("/recipes");
}

export function getRecipe(id) {
    return request(`/recipes/${id}`);
}

export function createRecipe(recipe) {
    return request("/recipes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
    });
}

export function updateRecipe(id, recipe) {
    return request(`/recipes/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
    });
}
