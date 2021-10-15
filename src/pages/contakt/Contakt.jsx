import './contakt.scss';
import {contactsList} from '../../jsons/links.json'

function Contakt () {
    
    return(
        <div className="cont__body container">
            {contactsList.map(el => (
                <div className="cont__items" key={el.id}>
                    <div className="cont__item">
                        <div className="cont__item__img">
                            <img src={require(`../../pic/icons/${el.pic}`).default} alt="" />
                        </div>
                        <div className="cont__item__url">
                            <a href={el.link}><p>{el.tittle}</p></a>
                        </div>
                    </div>
                
                </div>  
            ))}       
        </div>
    )
}

export default Contakt;