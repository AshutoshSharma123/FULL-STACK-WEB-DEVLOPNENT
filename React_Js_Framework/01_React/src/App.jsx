import React from 'react'


function click() {
  alert('hello');
}
const clickparam = (msg) => { // handling a paramaterized funtion in React we have to use a wraper Funtion
  alert(msg);
}

const App = () => {
  return (
    <div>
      <button onClick={click}>Click</button>
      <button onClick={() => clickparam('hello from line 19')}>Click(param)</button> // here we use a wraper function to handle a parameterized funcrtion

    </div>
  )
}

export default App // only one default export and multifple const export


