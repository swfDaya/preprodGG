import './Sidebar.css'

import arrowLeft from './assets/arrow-left-circle.svg'
import chart from '../assets/App/chart.svg'
import command from '../assets/App/command.svg'
import table from '../assets/App/table.svg'
import users from '../assets/App/users.svg'
import settings from '../assets/App/settings.svg'
import fileText from '../assets/App/file-text.svg'
import compass from '../assets/App/compass.svg'
import dashboard from '../assets/App/dashboard.svg'

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isExpanded, setIsExpanded }: SidebarProps) => {

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
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={command}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Daily Tracker
                </div>
            </div>
            <div
            className={`not__for__mobile app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={table}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    My Workouts
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={chart}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Dashboard
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={dashboard}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Mentor Inputs
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={users}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                // style={{
                //     // color: isExpanded ? 'var(--taupeGray)' : 'var(--charlestonGreen)',
                //     color: 'var(--charlestonGreen)'
                // }}
                >
                    Squad Activity
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={compass}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                // style={{
                //     // color: isExpanded ? 'var(--taupeGray)' : 'var(--charlestonGreen)',
                //     color: 'var(--charlestonGreen)'
                // }}
                >
                    Explore
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={fileText}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Workout Database
                </div>
            </div>
            <div
            className={`app__sidebar__content__each ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={settings}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                // style={{
                //     // color: isExpanded ? 'var(--taupeGray)' : 'var(--charlestonGreen)',
                //     color: 'var(--charlestonGreen)'
                // }}
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
