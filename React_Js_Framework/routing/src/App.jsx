
import Nav from './components/Nav'

import MainRoutes from './components/MainRoutes'

const App = () => {
  return (
    <div className='text-3xl h-screen w-screen flex flex-col   bg-black text-white'>
      <Nav />
      <MainRoutes />


    </div>
  )
}

export default App