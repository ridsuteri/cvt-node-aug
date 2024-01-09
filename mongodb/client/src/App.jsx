import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SigninPage from './SigninPage'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signin' element={<SigninPage/>} />
     </Routes>

    </BrowserRouter>
  )
}

export default App