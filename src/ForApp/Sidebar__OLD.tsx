import './Sidebar.css'

import logo from './assets/logo.svg'
import briefcase from './assets/briefcase.svg'
// import chevronsLeft from './assets/chevrons-left.svg'
import arrowLeft from './assets/arrow-left-circle.svg'
import arrowRight from './assets/arrow-right-circle.svg'
import cloudDrizzle from './assets/cloud-drizzle.svg'
import film from './assets/film.svg'
import headphones from './assets/headphones.svg'

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isExpanded, setIsExpanded }: SidebarProps) => {

    return (
        <div
        className={`app__sidebar ${isExpanded ? 'expanded' : ''}`}
        >
            <div
            className='app__sidebar__logo'
            >
                <img src={logo} alt='logo' />
                <div
                className={`app__sidebar__logo__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Gains Gauge
                </div>
            </div>
            <div
            className='app__sidebar__dashboard'
            >
                <img src={briefcase} alt='briefcase' />
                <div
                className={`app__sidebar__logo__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Briefcase
                </div>
            </div>
            <div
            className='app__sidebar__cloud__drizzle'
            >
                <img src={cloudDrizzle} alt='cloud-drizzle' />
                <div
                className={`app__sidebar__logo__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Cloud Drizzle
                </div>
            </div>
            <div
            className='app__sidebar__film'
            >
                <img src={film} alt='film' />
                <div
                className={`app__sidebar__logo__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Film
                </div>
            </div>
            <div
            className='app__sidebar__headphones'
            >
                <img src={headphones} alt='headphones' />
                <div
                className={`app__sidebar__logo__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Headphones
                </div>
            </div>
            <div
            className='app__sidebar__spacer'
            >
                
            </div>
            <div
            className='app__sidebar__menu__collapse'
            onClick={() => setIsExpanded(!isExpanded)}
            >
                <img 
                src={isExpanded ? arrowLeft : arrowRight}
                alt='menu__collapse__icon' 
                />
                <div
                className={`app__sidebar__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Hide Menu
                </div>
            </div>
        </div>
    )
}

export default Sidebar
