import { useState } from 'react'
import ReactLogo from '@assets/react.svg'
import ViteLogo from '@assets/vite.svg'
import CCALogo from '@assets/cca.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={ViteLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={ReactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h4>Boilerplate by</h4>
      <a
        href='https://codecraftavila.super.site/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={CCALogo} className='logo' alt='<ode <raft avila logo' />
        <h1 style={{ fontFamily: 'Montserrat Alternates' }}>
          &#60;ode &#60;raft avila
        </h1>
      </a>
      <h4>
        <a
          href='https://github.com/codeavila/boilerplate-vite-reactjs'
          target='_blank'
          rel='noreferrer'
        >
          ⭐ Star on Github ⭐
        </a>
      </h4>

      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the logos to know more about Vite and React and read the docs
        on the{' '}
        <a href='https://github.com/codeavila/boilerplate-vite-reactjs'>
          Github repo
        </a>
      </p>
      <h1>Navigation Example</h1>
      <ul>
        <li>
          <a href='/login'>Login</a>
        </li>
        <li>
          <a href='/home'>Home</a>
        </li>
      </ul>
    </>
  )
}

export default App
