import { Routes, Route } from 'react-router-dom'
import PageHome from "../pages/PageHome";
import Page404 from "../pages/Page404";
import PageIpInformacion from '../pages/PageIpInformacion';

export default function PagesRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path=":ip" element={<PageIpInformacion />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}
