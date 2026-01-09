import { createRoot } from 'react-dom/client'
import '@fontsource-variable/open-sans/wght.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
