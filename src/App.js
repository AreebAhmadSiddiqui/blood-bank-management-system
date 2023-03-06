import React from 'react'
import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import DonorsLogin from './components/DonorsLogin'
import RecipientsLogin from './components/RecipientsLogin'
import AdminPage from './components/AdminPage'
import DonorsPage from './components/DonorsPage'
import RecipientsPage from './components/RecipientsPage'
import AdminLogin from './components/AdminLogin'
import RecipientSignup from './components/RecipientSignup'
import Page from './components/Page'
import AdminSignup from './components/AdminSignup'
import DonorsSignup from './components/DonorsSignup'

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage/>} exact/>
          <Route path='/admin' element={<AdminLogin/>} />
          <Route path='/admin/:id' element={<AdminPage/>} />
          <Route path='/admin/signup' element={<AdminSignup/>} />
          <Route path='/admin/:id/:type' element={<Page/>} />
          <Route path='/donor' element={<DonorsLogin/>} />
          <Route path='/donor/:id' element={<DonorsPage/>} />
          <Route path='/donor/signup' element={<DonorsSignup/>} />
          <Route path='/donor/:id/:type' element={<Page/>} />
          <Route path='/recipient' element={<RecipientsLogin/>} />
          <Route path='/recipient/:id' element={<RecipientsPage/>} />
          <Route path='/recipient/signup' element={<RecipientSignup/>} />
          <Route path='/recipient/:id/:type' element={<Page/>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App