import React, {useContext} from "react";
import classNames from "classnames";
import { OpContext } from "../../context/context";

import './contacts.scss'

import iconPhone from '../../pic/icons/phone_black.png'
import iconTelegram from '../../pic/icons/telegram_black.png'
import iconWhatsapp from '../../pic/icons/whatsap_black.png'
import iconMail from '../../pic/icons/ml.png'

function Contacts () {

    const {colorSite} = useContext(OpContext);

     return (
        <div className="info__contacts">
            <div className={classNames("info__line", {dark_line_color: (colorSite==="black"), light_line_color: (colorSite==="light")})}> <span>контакты</span></div>
            <ul>
                <li><a href="tel:+79670984898"><img src={iconPhone} alt="phone"/><img src={iconWhatsapp} alt="phone"/><img src={iconTelegram} alt="phone"/></a><span>+7(967)098-48-98</span> </li>
                <li><a href="mailto:zavoronk@mail.ru"><img src={iconMail} alt="mail"/></a><span>zavoronk@mail.ru</span> </li>
            
            </ul>
        </div>
     )
}

export default Contacts;