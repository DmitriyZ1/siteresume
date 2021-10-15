import React, { useContext } from "react";

import './info.scss'

import {Works} from "../works";
import {Contacts} from "../contacts";
import {Nets} from '../nets'
import { OpContext } from "../../context/context";

function Info () {

  const l = useContext(OpContext);
  
    
    return (
        <div className="info container">
         
          <Works />
          <Nets />
          <Contacts />

        </div>

    )
}

export default Info;