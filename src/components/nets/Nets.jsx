import React, {useContext} from "react";
import classNames from "classnames";
import { OpContext } from "../../context/context";

import './nets.scss'

import iconVK from '../../pic/icons/vk_kub.png'
import iconInst from '../../pic/icons/instagram.png'

function Nets( ) {

    const {colorSite} = useContext(OpContext);

    return (
        <div className="info__networks">
            <div className={classNames("info__line", {dark_line_color: (colorSite==="black"), light_line_color: (colorSite==="light")})}> <span>мои соцсети</span></div>
            <div className="network__items">
                <a href="https://vk.com/dmitriy_z_ov"><img src={iconVK} alt="vk" /></a>
                <a href="https://www.instagram.com/dimonnr/"><img src={iconInst} alt="insta" /></a>
            </div>
        </div>
    )
}

export default Nets;