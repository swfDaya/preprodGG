import './App.css'

import command from './assets/App/command.svg'
import menu from './assets/App/menu.svg'  
import chart from './assets/App/chart.svg'
import table from './assets/App/table.svg'
import users from './assets/App/users.svg'

import Sidebar from './ForApp/Sidebar'

import { useState } from 'react'

function App() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='app'>
      <div
      className={`app__sidebar ${isExpanded ? 'expanded' : ''}`}
      // onClick={() => setIsExpanded(!isExpanded)}
      >
        <Sidebar 
        isExpanded={isExpanded} 
        setIsExpanded={setIsExpanded} 
        />
      </div>
      <div className='app__container'>

      </div>
      <div
      className='app__footer'
      >
        <div
        className='app__footer__menu'
        >
          <img src={menu} alt='menu__footer__icon' onClick={() => setIsExpanded(!isExpanded)} />
        </div>
        <div
        className='app__footer__menu'
        >
          <img src={chart} alt='chart__footer__icon' />
        </div>
        <div
        className='app__footer__menu'
        >
          <img src={command} alt='command__footer__icon' />
        </div>
        <div
        className='app__footer__menu'
        >
          <img src={table} alt='table__footer__icon' />
        </div>
        <div
        className='app__footer__menu'
        >
          <img src={users} alt='users__footer__icon' />
        </div>
      </div>
    </div>
  )
}

export default App
