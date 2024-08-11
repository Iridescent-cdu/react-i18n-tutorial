import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/index'
import { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
)
