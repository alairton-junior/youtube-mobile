import { Link } from "react-router-dom";

import '../assets/css/Page404.css'

import Lottie from "lottie-react";
import Developer from '../assets/imgs/lotties/Developer.json'

export function Page404() {
    return (
        <div className="p404"> 
        <div>
            <Lottie animationData={Developer} />
        </div>
        <div className="p404-text">
            <h1>Error 404</h1>
            <h4>Our developers are creating that page yet, come back later
             or <Link to="/"><button>CLICK HERE</button></Link> to go back Home.</h4>
        </div>
                
        </div>
    )
}