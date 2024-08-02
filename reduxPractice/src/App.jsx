import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'
import showSlice from './features/showSlice'
import { useSelector } from 'react-redux'

function App() {
  const data=useSelector((c)=>
  {
    return c.show.value;
  })
 

  return (
    <>
      {data}
      <Child/>
    </>
  )
}

export default App
