import React from "react";

import './welcome.scss';

const Welcome = () => {

    
    const d = new Date();
    let text = '';
    let hour = +d.getHours();
    console.log(hour)
    if(hour >= 0 && hour <= 4) {
        text = 'Доброй ночи!'
    } else if (hour >= 5 && hour <= 11){
        text = 'Доброе утро!'
    } else if (hour >= 12 && hour <= 16){
        text = 'Добрый день!'
    }  else if (hour >= 17 && hour <= 22){
        text = 'Добрый вечер!'
    } else if (hour >= 23){
        text = 'Доброй ночи!'
    }
    
    
    return(
        <div className="welcome"> 
            <div>
                <h3>{text || 'Привет!'}</h3>
            </div>
        </div>
    )
}

export default Welcome;