import React from 'react'
import { useState } from 'react'
const App = () => {


  // const profiles = [{ name: 'a', age: 20 }, { name: 'c', age: 20 }, { name: 'd', age: 20 }];

  // const updatedProfiles = profiles.map((profile, index) => { 
  //   console.log(profile, index);
  //   return (
  //     <li key={index}>
  //       <span> Name: {profile.name}</span> 
  //       <span> Age: {profile.age}</span>
  //     </li>)
  // })


  // The above code is showing how to handle the Json Data in React JS here we map that data and render it using JSX 


  // UseState hook 
  const [username, setusername] = useState("ashutosh")
  const changeName = () => {

    setusername("Aditya")
    
  }


  return (
    // <div>
    //   <ul>
    //     {/* {updatedProfiles} */}
    //   </ul>
    // </div>



    <div className="">
      <h1>Username:</h1>
      <h2>{username}</h2>
      <button onClick={changeName}>Change Name</button>
    </div>

  )
}

export default App