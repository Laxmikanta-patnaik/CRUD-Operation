import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      
        <Route exact path='/' element={<Create />}></Route>
        <Route exact path='/read' element={<Read />}></Route>
        <Route exact path='/update' element={<Update />}></Route>
      

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
