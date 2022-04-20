import { About } from '../components/about/about';
import { Body } from '../components/body/body';
import { Form } from '../components/form/form';
import { Main } from '../components/main/main';
import { Navbar } from '../components/navbar/navbar';
import { FaArrowUp } from 'react-icons/fa'
import '../App.css';
import { Slider } from '../components/slider/slider';
export const Home = () => {
    return (
        <div>
            <div className='abs_button'>
                <FaArrowUp className='arrowUp' onClick={() => { window.scrollTo(0, 0) }} />
            </div>
            <Navbar />
            <Main />
            <Body />
            <About />
            <Slider/>
            <Form />
        </div>

    )
}