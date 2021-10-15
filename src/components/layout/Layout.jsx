import React, {useState, useContext} from "react";
import { Link, useLocation  } from "react-router-dom";
import classNames from "classnames";

import {OpContext} from '../../context/context';

import './layout.scss';

import label1 from '../../pic/label1.png'
import label2 from '../../pic/label2.png'
import setting from '../../pic/setting.png'


function Layout({children, optionsColor, funColor, funShowInfo}) {
    const [options, setOptions] = useState(false);
    const [optColor, setOptColor] = useState(false);

    const { colorSite } = useContext(OpContext);

    const { pathname } = useLocation();

    
   
    const opt = [
        {
            title: "цвет",
            push(){
                setOptColor((flag) => !flag) 
            },
            list: [
                {
                    id: "black",
                    title: "синий", 
                    push(){
                        funColor("black");
                        setOptColor(false)
                        setOptions(false)
                    },
                },
                {
                    id: "light",
                    title: "слива",
                    push(){
                        funColor("light");
                        setOptColor(false)
                        setOptions(false)
                    }, 
                },
            ]
        },
        {
            title: "инфо" , 
            lits:[],
            push(){
                funShowInfo();
                setOptions(false);
            }
        }
    ] 

    
    return(
        <>
            <header className = {classNames({dark_header_color: (colorSite==="black"), ligh_header_color: (colorSite==="light")})}>
                <div className = "header__body container">
                    <Link to={'/'}>
                        <div className="label">
                            <img src={label1} alt="label" />
                            <img src={label2} alt="label" />              
                        </div>
                    </Link>
                    <div className="menu">
                        <div className="link">
                            <Link to={'/'} className={classNames("button", {active_link: (pathname ==="/"), noactive_link: (pathname !=="/")})}>главная</Link>
                            <Link to={'/portf'} className={classNames("button", {active_link: (pathname === "/portf"), noactive_link: (pathname !== "/portf")})}>партфолио</Link>
                            <Link to={'/contact'} className={classNames("button", {active_link: (pathname ==="/contact"), noactive_link: (pathname !=="/contact")})}>контакты</Link>
                            </div>
                        <div className="options">
                            <img src={setting} alt=""  onClick={() => {setOptions((flag) => !flag); setOptColor(false) } }/>
                        </div>

                        {options && <div className="setup">
                            <ul>
                                {opt.map((el, index) => (<li 
                                onClick={el.push} 
                                key={index}> 
                                {el.title}
                                </li>))}
                                
                            </ul>
                            {optColor && <div className="setup">
                                <ul>
                                    {opt[0].list.map((el,index) => (<li 
                                    onClick={()=>{el.push()}} 
                                    className={(el.id ===  optionsColor) ? "active" : ''}
                                    key={index}> 
                                    {el.title}
                                    </li>))}
                                </ul>
                            </div>}
                        </div>}
                    
                    </div>
                </div>
            </header>

            {children}

            <footer>
                   
            </footer>
        </>
    )
}

export default Layout;