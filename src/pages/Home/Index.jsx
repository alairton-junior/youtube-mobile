import { Explorer } from "../../Components/Home/Explorer";
import { Video } from "../../Components/Home/Video";

import Thumbinails1 from '../../assets/imgs/thumbnails/video1.jpg'
import Thumbinails2 from '../../assets/imgs/thumbnails/noticia1.jpg'
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
        
        <Noticias //Esthefan
            avatarImage={Avatar1}
            image={Thumbinails2} 
            title="1 year traveling with my van in Europe! " 
            description="Bas • 1K views • 11 months ago"/>

        <Video 
            avatarImage={Avatar1}
            image={Thumbinails1} 
            title="Breaking! NASA discovers alien life on Mars " 
            description="NASA • 99.2M views • Now"/>

        <Video 
            avatarImage={Avatar1}
            image={Thumbinails1} 
            title="Breaking! NASA discovers alien life on Mars " 
            description="NASA • 99.2M views • Now"/>
        </>
    )
}