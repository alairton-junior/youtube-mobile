import { Avatar } from "../Root/Avatar";

import Cast from '../../assets/imgs/icons/Cast.svg'
import Notification from '../../assets/imgs/icons/Notification.svg'
import Search from '../../assets/imgs/icons/Search.svg'


export function NavHeader ({screen}) {

    return (
        <>
            <div className="NavHeader"> 
                <img src={Cast} alt="Cast"  onClick={() => {alert('Cast')}}/>
                <img src={Notification} alt="Notification"  onClick={() => {alert('Notification')}}/>
                {screen > 576 ? '' : <img src={Search} alt="Search"  onClick={() => {alert('Search')}}/>}
                <Avatar/>
            </div>
        </>
    )
}