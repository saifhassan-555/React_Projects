import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "saif",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1> <br />
    <Card username= "My Channel" btnText="click me" />
    {/* //someObje={newArr} */}
    <br />
    <Card username="Angilena" btnText="visit my profile"/>
    </>
  )
}

export default App