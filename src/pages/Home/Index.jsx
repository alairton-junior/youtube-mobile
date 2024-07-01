import { Explorer } from "../../Components/Home/Explorer";
import { Video } from "../../Components/Home/Video";
import {Noticias} from "../../Components/Home/Noticia.jsx";

import Thumbinails1 from '../../assets/imgs/thumbnails/video1.jpg'
import Thumbinails2 from '../../assets/imgs/thumbnails/noticia1.png'
import Thumbinails3 from '../../assets/imgs/thumbnails/UX.png'
import Thumbinails4 from '../../assets/imgs/thumbnails/dino.png'
import Thumbinails5 from '../../assets/imgs/thumbnails/universo.png'
import Thumbinails6 from '../../assets/imgs/thumbnails/vulcao.png'
import Thumbinails7 from '../../assets/imgs/thumbnails/figma.png'
import Thumbinails8 from '../../assets/imgs/thumbnails/cat.png'
import Avatar1 from '../../assets/imgs/Avatar2.jpg'
import Avatar2 from '../../assets/imgs/Avatar-Cat.png'
import AvatarFigma from '../../assets/imgs/AvatarFigma.png'
import Volcano from '../../assets/imgs/Volcano.png'
import AvatarUniverso from '../../assets/imgs/AvatarUniverso.png'

import "../../assets/css/Home/grid.css";


export function Index () {
    return (
        <>
        <Explorer/>
        <div className="video-grid">

            <Video 
                    avatarImage={Avatar1}
                    image={Thumbinails1} 
                    title="Breaking! NASA discovers alien life on Mars " 
                    description="NASA • 99.2M views • Now"/>
        
            <Noticias
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
            <Video 
                avatarImage={AvatarUniverso}
                image={Thumbinails5} 
                title="Random bubble designstuff" 
                description="UxDesign • 120k views • 2 months ago"/>
            <Video 
                avatarImage={Volcano}
                image={Thumbinails6} 
                title="Volcano goes boom" 
                description="UxDesign • 120k views • 2 months ago"/>
                <Video 
                avatarImage={AvatarFigma}
                image={Thumbinails7} 
                title="Autolayout for the win!" 
                description="UxDesign • 120k views • 2 months ago"/>
            <Video 
                avatarImage={Avatar1}
                image={Thumbinails4} 
                title="DesignER-rrors " 
                description="UxDesign • 120k views • 2 months ago"/>
            <Video 
                avatarImage={Avatar2}
                image={Thumbinails8} 
                title="Kitten fighting in bar" 
                description="CatsWithHeads • 9M views • 1 months ago"/>
            
        </div>
        </> 
    )
}