import './form.css'
export const Form = () => {
    return (
        <div className='form'>
            <div className='left-side'>
                <h1>Lets discuss<br />your project</h1>
                <div className='left-side_inner'>
                    <div>
                        <div className='contacts'>
                            <img src='https://cdn-icons-png.flaticon.com/512/724/724664.png' width='30' height='30' />
                            <p>+7-776-296-89-06</p>
                        </div>
                        <div className='contacts'>
                            <img src='https://cdn-icons-png.flaticon.com/512/726/726623.png' width='30' height='30' />
                            <p>azamat.rustemov.02@mail.ru</p>
                        </div>
                        <div className='contacts'>
                            <img src='https://cdn-icons-png.flaticon.com/512/684/684908.png' width='30' height='30' />
                            <p>г. Нур-Султан, Казахстан 010000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ride-side'>
                <form className='f'>
                    <input type='text' placeholder='Name' className='i_name' />
                    <input type='text' placeholder='Subject' className='i_subject' />
                    <input type='text' placeholder='Email' className='i_email' />
                    <textarea placeholder='Message' className='i_textarea' />
                    <input type='submit' value='submit' className='i_submit' />
                </form>
            </div>
        </div>
    )
}