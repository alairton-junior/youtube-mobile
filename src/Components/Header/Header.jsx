import { Logo } from "./Logo";
import { NavHeader } from "./NavHeader";

import './Header.css'

export function Header () {
    const screenWidth = window.innerWidth
    return (
    <>
        <header>
            <div className="logo">
                <Logo/>
            </div>
            <div className="searchInput">
                {screenWidth > 576 ? (<input type="text" name="Search" id="Search" placeholder="Search"/>):('')}
            </div>
            <div className="NavHeader">
                <NavHeader screen={screenWidth}/>
            </div>
        </header>
    </>
    )
}

