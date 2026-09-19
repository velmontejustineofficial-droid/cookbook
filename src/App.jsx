import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import RecipeCollectionPage from "./features/recipes/pages/RecipeCollectionPage.jsx";
import RecipeDetailPage from "./features/recipes/pages/RecipeDetailPage.jsx";

import "./App.css";

function AppShell() {
    const navigate = useNavigate();
    const location = useLocation();

    return <main className="cookbook-shell">
        <header className="topbar"><Link className="brand" to="/recipes"><span>✦</span> pantry notes</Link>{location.pathname === "/recipes" && <button className="new-button" onClick={() => navigate("/recipes?new=true")}>+ New recipe</button>}</header>
        <Routes>
            <Route path="/recipes" element={<RecipeCollectionPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailPage />} />
            <Route path="*" element={<Navigate to="/recipes" replace />} />
        </Routes>
    </main>;
}

export default AppShell;
