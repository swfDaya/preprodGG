import './Sidebar.css'

// import logo from './assets/logo.svg'
import briefcase from './assets/briefcase.svg'
import arrowLeft from './assets/arrow-left-circle.svg'
// import arrowRight from './assets/arrow-right-circle.svg'
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
        className={`app__sidebar__content ${isExpanded ? 'expanded' : ''}`}
        >
            <div
            className={`app__sidebar__content__logo ${isExpanded ? 'expanded' : ''}`}
            >

            </div>
            <div
            className={`app__sidebar__content__headphones ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={briefcase}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Briefcase
                </div>
            </div>
            <div
            className={`app__sidebar__content__headphones ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={cloudDrizzle}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Cloud
                </div>
            </div>
            <div
            className={`app__sidebar__content__headphones ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={film}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                >
                    Film
                </div>
            </div>
            <div
            className={`app__sidebar__content__headphones ${isExpanded ? 'expanded' : ''}`}
            >
                <img 
                // src={isExpanded ? arrowLeft : arrowRight}
                src={headphones}
                alt='app__sidebar__content__collapse__icon' 
                />
                <div
                className={`app__sidebar__content__collapse__text ${isExpanded ? 'expanded' : ''}`}
                style={{
                    // color: isExpanded ? 'var(--taupeGray)' : 'var(--chineseBlack)',
                    color: 'var(--chineseBlack)'
                }}
                >
                    Headphones
                </div>
            </div>
            <div
            className={`app__sidebar__content__spacer ${isExpanded ? 'expanded' : ''}`}
            >

            </div>
            <div
            className={`app__sidebar__content__collapse ${isExpanded ? 'expanded' : ''}`}
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
