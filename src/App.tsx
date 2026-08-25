import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CookBook from './pages/CookBook'
import RecipePage from './pages/RecipePage'
import Favorites from './pages/Favorites'
import AuthPage from './pages/AuthPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<CookBook />} />
          <Route path='recipes/:id' element={<RecipePage />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='login' element={<AuthPage />} />
          </Route>

       

      </Routes>
    </BrowserRouter>
  )
}

export default App;