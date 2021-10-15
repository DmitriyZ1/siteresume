  import './inf.scss'
  
  const Inf = ({text, funClose}) => {
      return(
          <div className="inf" onClick={funClose}>
              <div className="inf__body">
                  <div className="inf__content">
                      <p>{text}</p>
                  </div>

              </div>
          </div>
      )
  }

  export default Inf;