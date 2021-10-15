
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.scss';

import fon from './pic/fon1.jpg'

import { Home } from './pages/home'
import { Contakt } from './pages/contakt'
import { Portfolio } from './pages/portfolio'

import { Layout } from './components/layout'
import { Welcome } from './components/welcome'
import { ShowPhoto } from './components/showphoto'
import { Inf } from './components/inf'

import { information } from './jsons/links.json';

import { OpContext } from './context/context';



function App() {
  
  const [coloring, setColoring] = useState("black");
  const [onload, setOnload] = useState(true);
  const [showPhoto, setShowPhoto] = useState(false);
  const [infoActiv, setInfoActiv] = useState(false);

  const changeColor = (color) =>{
    setColoring(color);
  } 

  useEffect(() => {
    setTimeout(() => {setOnload(false)}, 5000)
    console.log('nsndmsm')
  }, [])

  const zoomPic = () => {
    setShowPhoto(true)
  } 

  const closedPic = () => {
    setShowPhoto(false)
  }

  const showInfo = () => {
    setInfoActiv(true)
  }

  const closeInfo = () => {
    setInfoActiv(false)
  }

  


  return (
    <OpContext.Provider value={{colorSite: coloring}}>
      <div className="App" style={{ backgroundImage: `url(${fon})` }} >
        <div className="fon1">
          <Layout optionsColor={coloring} funColor={changeColor} funShowInfo={showInfo}>
            
              <Switch>
                <Route exact path='/' render={() => <Home zoomPhoto={zoomPic} />} />
                <Route exact path='/contact' component={Contakt} />
                <Route exact path='/portf' component={Portfolio} />
                
              </Switch>
          
          </Layout>
        </div>
        {onload &&   <Welcome />}
        {showPhoto && <ShowPhoto closedPhoto={closedPic}/>}
        {infoActiv && <Inf  text={information} funClose={closeInfo}/>}
      </div>
    </OpContext.Provider>
  );
}

export default App;
