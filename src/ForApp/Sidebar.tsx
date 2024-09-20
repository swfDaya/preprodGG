import './Sidebar.css'

import arrowLeft from './assets/arrow-left-circle.svg'
import dashboard from '../assets/App/chart.svg'
import dashboardSelected from '../assets/App/dashboardSelected.svg'
import daily from '../assets/App/command.svg'
import dailySelected from '../assets/App/dailySelected.svg'
import workout from '../assets/App/table.svg'
import workoutSelected from '../assets/App/workoutSelected.svg'
import settings from '../assets/App/settings.svg'
import settingsSelected from '../assets/App/settingsSelected.svg'
import WorkoutDb from '../assets/App/file-text.svg'
import WorkoutDbSelected from '../assets/App/workoutDbSelected.svg'
import compass from '../assets/App/compass.svg'
import compassSelected from '../assets/App/compassSelected.svg'
import mentor from '../assets/App/mentor.svg'
import mentorSelected from '../assets/App/mentorSelected.svg'
import squad from '../assets/App/users.svg'
import squadSelected from '../assets/App/squadSelected.svg'

import { useState } from 'react'

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isExpanded, setIsExpanded }: SidebarProps) => {

    const [selectedTab, setSelectedTab] = useState('dailyTracker');

    return (
        <div
        className={`app__sidebar__content ${isExpanded ? 'expanded' : ''}`}
        >
            <div
            className={`app__sidebar__content__logo ${isExpanded ? 'expanded' : ''}`}
            >

            </div>
            <div
            className={`not__for__mobile app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('dailyTracker')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'dailyTracker' ? dailySelected : daily}
                alt='app__sidebar__content__collapse__icon'
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'dailyTracker' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    Daily Tracker
                </div>
            </div>
            <div
            className={`not__for__mobile app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('myWorkouts')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'myWorkouts' ? workoutSelected : workout}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'myWorkouts' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    My Workouts
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('dashboard')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'dashboard' ? dashboardSelected : dashboard}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'dashboard' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    Dashboard
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('mentorInputs')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'mentorInputs' ? mentorSelected : mentor}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'mentorInputs' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    Mentor Inputs
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('squad')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'squad' ? squadSelected : squad}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'squad' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    Squad Activity
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('explore')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'explore' ? compassSelected : compass}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'explore' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    Explore
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('workoutDatabase')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'workoutDatabase' ? WorkoutDbSelected : WorkoutDb}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'workoutDatabase' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    Workout Database
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setSelectedTab('settings')}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={selectedTab === 'settings' ? settingsSelected : settings}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`cursor__pointer app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    color: selectedTab === 'settings' ? 'var(--charlestonGreen)' : 'var(--taupeGray)',
                }}
                >
                    Settings
                </div>
            </div>
            <div
            className={`app__sidebar__content__spacer ${isExpanded ? 'expanded' : ''}`}
            >

            </div>
            <div
            className={`cursor__pointer app__sidebar__content__collapse ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={arrowLeft}
                style={{
                    transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)'
                }}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Hide Menu
                </div>
            </div>
        </div>
    )
}

export default Sidebar
