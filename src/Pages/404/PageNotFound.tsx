import './PageNotFound.css'

import notFoundImage from './assets/404_image.png'

const PageNotFound = () => {
  return (
    <div
    className='pageNotFound__main'
    >
      <div className='pageNotFound__main__spacer' > </div>
      <div className='pageNotFound__main__image to__center' >
        <img src={notFoundImage} alt="404" />
      </div>
      <div
      className='pageNotFound__main__404'
      >
        4 0 4
      </div>
      <div
      className='pageNotFound__main__missing__header'
      >
        OOPS ! Page not found
      </div>
      <div
      className='pageNotFound__main__missing__text'
      >
        Sorry, we couldn't find the page you were looking for.
      </div>
      <div
      className='pageNotFound__main__link'
      >
        <span className='noSelect cursor__pointer' >Back to Homepage ?</span>
      </div>
    </div>
  )
}

export default PageNotFound
