import React from "react";

import photoZoom from '../../pic/zoom.jpg'
import closed from '../../pic/icons/close.png'

import './showphoto.scss';

const ShowPhoto = ({closedPhoto}) => {

    

    return(
        <div className="show__body"> 
            <div className="photo__zoom" >
                <img id="closed"src={closed} onClick={()=>{closedPhoto()}} alt="photo" />
                <img id="ph"src={photoZoom} alt="photo" />
               
            </div>
        </div>
    )
}

export default ShowPhoto;