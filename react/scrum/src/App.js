import React from 'react'
import WelcomePage from './Pages/welcomP/WelcomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
