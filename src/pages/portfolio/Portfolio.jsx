import './portfolio.scss'

import { partlist } from '../../jsons/links.json';


function Portfolio () {
    
    return(
        <div className="port__body container">
            <div className="port__content">
            <div className="items__works_p">
                <ul>
                  {partlist.map(el => (
                    <li key={el.id}>
                      <div className="item_p">
                        <div className="pic__work_p">
                          <img src={require(`../../pic/scr/${el.pic}`).default} alt="pic" />
                        </div>
                        <div className="text__work_p">
                          <a href="">{el.url}</a>
                          <p>{el.description}</p>
                        </div>
                      </div>
                      <hr />
                    </li>
                  ))}
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Portfolio;