import './DailyTracker.css'

import lifeWeight from './assets/lift_weight.png'

const DailyTracker = () => {

    

    return (
        <div
        className = 'daily__tracker__main'
        >
        <div
        className = 'daily__tracker__image__main'
        >
            <img
            className = 'daily__tracker__image'
            src = {lifeWeight}
            />
        </div>
        <div
        className='daily__tracker__button__main to__center cursor__pointer noSelect'
        >
            <span>Start Today's routine</span>
        </div>
        </div>
    )
}

export default DailyTracker
