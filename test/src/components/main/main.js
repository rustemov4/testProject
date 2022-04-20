import './main.css'
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'
import { useEffect, useState } from 'react'
console.log(window.innerWidth)

export const Main = () => {
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(() =>{
        window.addEventListener('resize',() =>{
            console.log(window.innerWidth)
            setWidth(window.innerWidth)
        })
    },[])
    return (
        <div className="main">
            <div className='about'>
                <h1>Hi all, I'm Azamat</h1>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, id nam epicuri mediocritatem, in pri iudico minimum, mei ad essent concludaturque. Pro rebum partiendo no, mei minim legere eu. Cu mei solet sapientem, ei eam aeterno scripta, ei vel probo facilisis consequuntur. Omnis putant an duo, et cum vide utamur delenit, pri ex lorem alienum convenire. Id quot appetere euripidis cum, ut est quis case commune.
                </p>
                <div className='icons'>
                    <FaInstagram />
                    <FaGithub className='icon_item' />
                    <FaTwitter className='icon_item' />
                </div>
            </div> 
            <div className='absolute_item1'>
                <img width='35px' height='35px' src='https://cdn-icons.flaticon.com/png/512/4315/premium/4315531.png?token=exp=1650301496~hmac=20e1e71302e2b2387e9f66467e4c84f8' />
                <h3>Web Developer</h3>
            </div>
            <div className='absolute_item2'>
                <img width='35px' height='35px' src='https://cdn-icons-png.flaticon.com/512/4090/4090434.png' />
                <h3>Best Design Award</h3>
            </div>
            <img src={require('../../assests/custom.png')} className='custom' width={width < 700 ? 220: 400} height={width < 700 ? 220 :400} />
        </div>
    )
}