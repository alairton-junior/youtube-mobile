import { Explorer } from "../../Components/Home/Explorer";
import { Video } from "../../Components/Home/Video";
import {Noticias} from "../../Components/Home/Noticia.jsx";

import Thumbinails1 from '../../assets/imgs/thumbnails/video1.jpg'
import Thumbinails2 from '../../assets/imgs/thumbnails/noticia1.png'
import Thumbinails3 from '../../assets/imgs/thumbnails/UX.png'
import Avatar1 from '../../assets/imgs/Avatar2.jpg'


export function Index () {
    return (
        <>
        <Explorer/>
        <Video 
            avatarImage={Avatar1}
            image={Thumbinails1} 
            title="Breaking! NASA discovers alien life on Mars " 
            description="NASA • 99.2M views • Now"/>
        
        <Noticias //Esthefann
            avatarImage={Avatar1}
            image={Thumbinails2} 
            title="1 year traveling with my van in Europe! " 
            description="Bas • 1K views • 11 months ago"/>

        <Video 
            avatarImage={Avatar1}
            image={Thumbinails3} 
            title="Volcano goes boom " 
            description="BoomChanne• 82k views • 6 months ago"/>

        <Video 
            avatarImage={Avatar1}
            image={Thumbinails1} 
            title="DesignER-rrors " 
            description="UxDesign • 120k views • 2 months ago"/>
        </>
        
    )
}