import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Accordian from './components/Accordian'
import App from './App.jsx'
import RandomColor from './components/random-color/Index'
import StarRating from './components/Star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Accordian/>
    <RandomColor/> */}
    {/* star rating  */}
    {/* <StarRating noOfStars={10}/> */}
    {/* image slider container  */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10}/> */}

    {/* load multi data  */}
    <LoadMoreData/>
  </StrictMode>,
)
