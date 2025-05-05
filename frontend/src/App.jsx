import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/dashboard/UserLayout'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>} >
          <Route path='/' element={<HomePage/>} />
          <Route path='/product/:id' element={<ProductDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
