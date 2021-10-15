import React, {useContext} from "react";
import classNames from "classnames";

import {OpContext} from '../../context/context';

import './content.scss';

import photo from '../../pic/aim.png'



function Content({zoomPhoto}) {
    const { colorSite } = useContext(OpContext); 

    return(
        <>
            <div className="line"> 
                <div className="line__text container"><span>добро пожаловать на мой сайт</span></div>
                <div className={classNames("line__decor",{dark_line_color: (colorSite==="black"), light_line_color: (colorSite==="light")})} > </div>
            </div>

            <div className="void container">
                <div className="photo" onClick={() => {zoomPhoto()}}>
                    <img src={photo} style={{width : '240px',height:'280px'}} alt="photo"/>
                </div>
            </div>


            <div className="content container">
                <div className="text">
                    <h2>Hello</h2>
                    <p>orem ipsum &Omicron; dolor sit amet consectetur adipisicing elit. Itaque, suscipit obcaecati! Tempore at veritatis eveniet, architecto ea quasi molestias. Eum eligendi soluta adipisci minus minima rerum sed dolorum a totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem commodi cumque veniam libero officiis maiores mollitia, saepe, quidem esse delectus earum id voluptates voluptatem corporis eveniet, qui ad distinctio totam fugiat amet optio nihil reiciendis excepturi suscipit? Minus culpa, odio officia illo delectus praesentium sint, omnis sapiente doloribus nisi aperiam eos inventore dolorum veritatis voluptates? Architecto vel ducimus aut beatae dolore aspernatur eum necessitatibus aperiam aliquam reprehenderit suscipit deserunt quos minus impedit facilis dolores laudantium quidem quae aliquid, recusandae doloribus hic? Vitae, exercitationem aliquam, dignissimos cupiditate nam esse earum accusantium ratione, enim tempore sed! Suscipit provident fuga voluptates veniam consequuntur.</p>
                </div>
            </div>

            <div className={classNames("line_2",{dark_line_color: (colorSite==="black"), light_line_color: (colorSite==="light")})} > 
                <div className="line2__text container"><span>добро пожаловать на мой сайт</span></div>
            </div>
        </>
    )
}

export default Content;