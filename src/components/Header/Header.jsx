import { Link } from 'react-router-dom';
import home_logo from '../../assets/images/home_logo.svg';

function Header() {
    return (
        <header>
            <img src={home_logo} alt="logo de kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header;