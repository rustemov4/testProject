import { useState } from 'react'
import './slider.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export const Slider = () => {
    const [current, setCurrent] = useState(0)
    const data = [
        {
            id: 0,
            Image: 'https://wallpapercave.com/wp/wp3537548.png',
            name: 'E-commerce'
        },
        {
            id: 1,
            Image: 'https://acquire.io/wp-content/uploads/2017/02/Why-Live-Chat-is-the-Best-Customer-Service-Right-Now.png',
            name: 'Chat application'
        },
        {
            id: 2,
            Image: 'https://img.freepik.com/free-vector/set-people-listening-music-illustrated_52683-24584.jpg?w=2000',
            name: 'Audio player app'
        }
    ]
    return (
        <div className='slider_outer'>
            <div>
                <h1>My recent work <span>Portfolio</span> {data.map(val => val.id == current ? val.name:"")}  </h1>
                <div className='slider'>
                    {
                        data.map(val => {
                            if (val.id === current) {
                                return (
                                    <div className='slide'>
                                        <FaArrowLeft className='arrow_left' onClick={() => current === 0 ? setCurrent(data.length - 1) : setCurrent(current - 1)} />
                                        <img src={val.Image} className='slider_img' />
                                        <FaArrowRight className='arrow_right' onClick={() => current === data.length - 1 ? setCurrent(0) : setCurrent(current + 1)} />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}