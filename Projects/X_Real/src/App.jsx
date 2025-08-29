import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agents from './pages/Agents'





const App = () => {

  return (
    <div className='' >

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agents' element={<Agents />} />
      </Routes>
    </div>

  )
}

export default App
