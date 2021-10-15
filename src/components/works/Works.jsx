import React, {useContext} from "react";
import classNames from "classnames";
import { OpContext } from "../../context/context";

import { partlist } from '../../jsons/links.json';

import './works.scss'


function Works (){

  const {colorSite} = useContext(OpContext);

    return (
        <div className="info__works">
            <div className={classNames("info__line", {dark_line_color: (colorSite==="black"), light_line_color: (colorSite==="light")})}><span>мои работы</span></div>
            <div className="items__works">
                <ul>
                  {partlist.map(el => (
                    <li key={el.id}>
                      <div className="item">
                        <div className="pic__work">
                          <img src={require(`../../pic/scr/${el.pic}`).default} alt="pic" />
                        </div>
                        <div className="text__work">
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
    )
}

export default Works;