import './App.css'

import daily from './assets/App/command.svg'
import dailySelected from './assets/App/dailySelected.svg'
import menu from './assets/App/menu.svg'  
import dashboard from './assets/App/chart.svg'
import dashboardSelected from './assets/App/dashboardSelected.svg'
import workout from './assets/App/table.svg'
import workoutSelected from './assets/App/workoutSelected.svg'
import squad from './assets/App/users.svg'
import squadSelected from './assets/App/squadSelected.svg'

import Sidebar from './ForApp/Sidebar'

import { useState } from 'react'
import Container from './Pages/Container'

function App() {

  const [isExpanded, setIsExpanded] = useState(false);

  const [selectedTab, setSelectedTab] = useState('dailyTracker');

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
      <Container />
      <div
      className='app__footer'
      >
        <div
        className='app__footer__menu noSelect'
        >
          <img src={menu} alt='menu__footer__icon' onClick={() => setIsExpanded(!isExpanded)} 
          className = 'cursor__pointer'
          />
        </div>
        <div
        className='app__footer__menu noSelect'
        >
          <img src={selectedTab === 'dashboard' ? dashboardSelected : dashboard} alt='chart__footer__icon'  
          className = 'cursor__pointer'
          onClick={() => setSelectedTab('dashboard')}
          />
        </div>
        <div
        className='app__footer__menu noSelect'
        >
          <img src={selectedTab === 'dailyTracker' ? dailySelected : daily} alt='command__footer__icon'  
          className = 'cursor__pointer'
          onClick={() => setSelectedTab('dailyTracker')}
          />
        </div>
        <div
        className='app__footer__menu noSelect'
        >
          <img src={selectedTab === 'myWorkouts' ? workoutSelected : workout} alt='table__footer__icon'  
          className = 'cursor__pointer'
          onClick={() => setSelectedTab('myWorkouts')}
          />
        </div>
        <div
        className='app__footer__menu noSelect'
        >
          <img src={selectedTab === 'squad' ? squadSelected : squad} alt='users__footer__icon'  
          className = 'cursor__pointer'
          onClick={() => setSelectedTab('squad')}
          />
        </div>
      </div>
    </div>
  )
}

export default App
