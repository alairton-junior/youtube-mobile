import { Link } from "react-router-dom";
import "./styles.css";

import Home from "../../assets/imgs/icons/Home.svg";
import Shorts from "../../assets/imgs/icons/Shorts.svg"
import Subscriptions from "../../assets/imgs/icons/Subscriptions.svg"
import Library from "../../assets/imgs/icons/Library.svg"
import Add from "../../assets/imgs/icons/Add.svg"

export function Navigation () {
    return (
        <footer>
            <nav className="nav-container">
                <Link to="/" className="nav-item">
                    <img src={Home} alt="Home" />
                    <span>Home</span>
                </Link>
                <Link to="/" className="nav-item">
                    <img src={Shorts} alt="Shorts" />
                    <span>Shorts</span>
                </Link>
                <Link to="/" className="add">
                    <img src={Add} />
                </Link>
                <Link to="/" className="nav-item">
                    <img src={Subscriptions} alt="Subscriptions" />
                    <span>Subscriptions</span>
                </Link>
                <Link to="/" className="nav-item">
                    <img src={Library} alt="Library" />
                    <span>Library</span>
                </Link>
            </nav>
        </footer>
    )
}