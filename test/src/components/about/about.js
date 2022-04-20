import './about.css'
export const About = () => {
    return (
        <div style={{marginTop:"300px"}}>
            <div className='sd'>
                <div className='sd_inner1'>
                    <div className='sd_back'></div>
                    <img src={require('../../assests/imaegs.png')} width='500' height='400' className='sd_img'/>
                </div>

                <div className='sd_inner2'>
                    <h2>About me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, id nam epicuri mediocritatem, in pri iudico minimum, mei ad essent concludaturque. Pro rebum partiendo no, mei minim legere eu. Cu mei solet sapientem, ei eam aeterno scripta, ei vel probo facilisis consequuntur. Omnis putant an duo, et cum vide utamur delenit, pri ex lorem alienum convenire. Id quot appetere euripidis cum, ut est quis case commune.
                        Eu pertinacia deseruisse sit. Sea ut diceret deseruisse. In pri duis consectetuer. Modo augue discere pro id, tollit interpretaris est ea.Ad sit erat nullam nonumes, pro noster aeterno perfecto eu. At cum viris elitr. Ignota equidem sea ea. Vix habeo patrioque no, adhuc intellegebat concludaturque cu per. Eos ea appetere dissentias disputando, singulis senserit quaerendum eam ut.
                    </p>
                </div>
            </div>
        </div>
    )
}