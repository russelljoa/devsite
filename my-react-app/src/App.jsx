import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1 className='headText'>MY DEV SITE</h1>
        </header>
        <section className='heroMain'>
          <h1 className='maintext marker-reg'>WELCOME</h1>
        </section>
      </div>
    </>
  )
}

export default App
