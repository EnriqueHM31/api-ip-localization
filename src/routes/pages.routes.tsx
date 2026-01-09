import { Routes, Route } from 'react-router-dom'
import PageHero from "../pages/Hero";
import PageNotFound from "../pages/NotFound";

function PagesRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageHero />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default PagesRoutes
