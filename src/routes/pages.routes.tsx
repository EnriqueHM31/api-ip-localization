import { Routes, Route } from 'react-router-dom'
import PageHero from "../pages/Hero";
import PageNotFound from "../pages/NotFound";
import PageInfoIp from '../pages/InfoIp';

export default function PagesRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageHero />} />
            <Route path=":ip" element={<PageInfoIp />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
