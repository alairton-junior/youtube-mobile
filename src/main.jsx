import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Index } from './pages/Home/Index.jsx'
import { Header } from './Components/Header/Header.jsx'
import { Navigation } from './Components/Navigation/index.jsx'
import { Page404 } from './pages/Page404.jsx'
import { Vote } from './Components/Home/Vote.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='*' element={<Page404/>} />
            </Routes>
            <Vote/>
          <Navigation/>
      </BrowserRouter>
    </React.StrictMode>
)
