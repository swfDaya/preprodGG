import './Sidebar.css'

import logo from './assets/logo.svg'
import briefcase from './assets/briefcase.svg'
import chevronsLeft from './assets/chevrons-left.svg'
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

            </div>
            <div
            className='app__sidebar__dashboard'
            >

            </div>
            <div
            className='app__sidebar__spacer'
            >

            </div>
            <div
            className='app__sidebar__menu__collapse'
            >
                <img 
                src={isExpanded ? arrowLeft : arrowRight}
                alt='menu__collapse__icon' 
                onClick={() => setIsExpanded(!isExpanded)}
                />
            </div>
        </div>
    )
}

export default Sidebar
