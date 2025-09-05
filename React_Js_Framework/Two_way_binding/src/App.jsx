import Create from './components/Create'
import Read from './components/Read'
import { useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([{ name: 'ashutosh', age: 24 }, { name: 'aditya', age: 22 }, { name: 'anvi', age: 5 }])

  return (
    <div>
      <Create />
      <hr />
      <Read users={users} setUsers={setUsers} />
    </div>
  )
}

export default App