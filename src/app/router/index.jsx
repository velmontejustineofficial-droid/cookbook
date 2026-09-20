import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes.jsx'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}