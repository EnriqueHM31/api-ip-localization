import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Loading from '../components/Atomos/Loading';

const PageHome = lazy(() => import('../pages/PageHome'));
const Page404 = lazy(() => import('../pages/Page404'));
const PageIpInformacion = lazy(() => import('../pages/PageIpInformacion'));


export default function PagesRoutes() {
    return (
        <Suspense fallback={<div className='min-h-screen'>
            <Loading text="Cargando..." />
        </div>}>

            <Routes>

                <Route path="/" element={<PageHome />} />
                <Route path=":ip" element={<PageIpInformacion />} />
                <Route path="*" element={<Page404 />} />
            </Routes>

        </Suspense>
    )
}
