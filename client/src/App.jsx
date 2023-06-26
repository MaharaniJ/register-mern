import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Register from './UserRegister'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App