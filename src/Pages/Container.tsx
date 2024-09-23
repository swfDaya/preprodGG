import './Container.css'

import PageNotFound from "./404/PageNotFound"
import DailyTracker from "./Daily Tracker/DailyTracker"
import {
    createBrowserRouter,
    RouterProvider,
    } from "react-router-dom";

const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement: <PageNotFound />,
    },
    {
        path: "/dailyTracker",
        element: <DailyTracker />,
        errorElement: <PageNotFound />,
    },
  ]);

const Container = () => {
  return (
    <div
    className="container"
    >
        <div
        className='container__content'
        >
            <div
            className='container__content__daily'
            >
                <DailyTracker />
            </div>
            <div
            className='container__content__main'
            >
                <RouterProvider router={mainRouter} />
            </div>
        </div>
    </div>
  )
}

export default Container
