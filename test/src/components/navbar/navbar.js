import './navbar.css'
import { HiOutlineMenu } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [active, setActive] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
            setWidth(window.innerWidth)
        })
    }, [])
    return (
        <div className='navbar'>
            <div className={active && width < 600 ? 'hidden active' : 'hidden'}>
                <div class="HListMenu">
                    <ul>

                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/list' >Todo</Link></li>
                    </ul>
                </div>
            </div>
            <div className="logo_container">
                <img src={'https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1650362586~hmac=c44c4c70b7d5fdc7d7b8d9cccedcb810'} width='70' height='70' />
            </div>
            <div className="nav_menu">
                <ul>
                    <li>
                        <Link to='/' style={{ color: "white", textDecoration: "none" }}>Home</Link>
                    </li>
                    <li>
                        <Link to='/list' style={{ color: "white", textDecoration: "none" }}>Todo</Link>
                    </li>
                </ul>
            </div>
            <div className='burger-menu'>
                <HiOutlineMenu onClick={() => setActive(!active)} />
            </div>
        </div>
    )
}