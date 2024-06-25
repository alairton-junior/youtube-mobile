import { Logo } from "./Logo";
import { NavHeader } from "./NavHeader";

import './Header.css'

export function Header () {
    return (
    <>
        <header>
            <div className="logo">
                <Logo/>
            </div>
            <div className="NavHeader">
                <NavHeader/>
            </div>
        </header>
    </>
    )
}

