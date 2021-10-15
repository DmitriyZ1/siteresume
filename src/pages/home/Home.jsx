
import { Info } from '../../components/info'

import { Content } from '../../components/content'

function Home ({zoomPhoto}) {
    
    return(
        <>
            <Content zoomPhoto={zoomPhoto}/>
            <Info />
        </>
    )
}

export default Home;