import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'
import NavBar from './Navbar'

function App() {
    const [count, setCount] = useState(0)

    return <>
        <NavBar />
        <div>
            Hi :3
        </div>
    </>
}

export default App
