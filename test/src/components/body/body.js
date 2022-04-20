import { useState } from 'react'
import './body.css'

export const Body = () => {
    const [services, setService] = useState([
        {
            name: 'Languages',
            values: [
                {
                    language: 'Javascript',
                    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
                    color: 'yellow'
                },
                {
                    language: 'Typescript',
                    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png'
                },
                {
                    language: 'Html',
                    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
                },
                {
                    language: 'Css',
                    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
                },
            ]
        },
        {
            name: 'Tools',
            values: [
                {
                    language: 'React',
                    icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
                },
                {
                    language: 'Redux',
                    icon: 'https://cdn-icons.flaticon.com/png/512/1183/premium/1183672.png?token=exp=1650363157~hmac=cc76f046bb0a39ec34289e3a8e24fc11'
                },
            ],
        },
        {
            name: 'Backend',
            values: [
                {
                    language: 'Node js',
                    icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png'
                },
                {
                    language: 'Express',
                    icon: 'https://cdn-icons.flaticon.com/png/512/2351/premium/2351891.png?token=exp=1650363269~hmac=913dcfd8e844134e044d31e3a293e09f'
                },
                {
                    language: 'Mysql',
                    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png'
                },
                {
                    language: 'Postgres',
                    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png'
                },
            ]
        }
    ])
    return (
        <div className='body_component'>
            {
                services.map((service, i) => (
                    <div className='card_outer'>
                        <div className='card_back'>

                        </div>
                        <div className='card' key={i}>
                            <h2 className='name'>{service.name}</h2>
                            <div className='card_inner'>
                                {
                                    service.values.map((value, k) => (
                                        <div className='val' key={k}>
                                            <div >{value.language}</div>
                                            <img src={value.icon} width='35px' height='35px' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}