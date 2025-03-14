import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import './styles.css'
export default function ImageSlider({ url, limit = 5 }) {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)

    const [errorMsg, setErrorMsg] = useState(null)
    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`)
            const data = await response.json()
            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url)

    }, [url])


    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error is occured !{errorMsg}</div>
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)

    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length ? 0 : currentSlide + 1)
    }
    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
        {images && images.length ?
            images.map((imageItem, index) => (
                <img
                    className={currentSlide === index ? "current-slider" : "current-slider hide-current-slider"}
                    key={imageItem.id}
                    src={imageItem.download_url}
                    alt={imageItem.download_url}

                />
            ))
            : null}
        <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow arrow-right"
        />
        <span className="circle-indicator">


            {images && images.length ?
                images.map((_, index) => (
                    <button
                        className={currentSlide===index?"current-indicator":"current-indicator inactive-indicator"}
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))
                : null
            }
        </span>
    </div>
}