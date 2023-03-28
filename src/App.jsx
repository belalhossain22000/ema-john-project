import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heder from './component/Heder/Heder'
import Shop from './component/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Heder></Heder>
     <Shop></Shop>
    </div>
  )
}
// deranged-sleep.surge.sh
export default App
