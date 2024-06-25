import { Link } from 'react-router-dom'
import YtbLogo from '../../assets/imgs/logos/youtube_logo.svg'

export function Logo () {
    return (
        <Link to="/">
            <img src={YtbLogo} alt="Logo Youtube" />
        </Link>
    )
}