import { useState } from 'react'
// import reactLogo from '/assets/img/react.svg'
// import viteLogo from '/assets/img/vite.svg'

function Intro() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>Halo, nama saya</h4>
      <h1>Jovan Finesta</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Intro
