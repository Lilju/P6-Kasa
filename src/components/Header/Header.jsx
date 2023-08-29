import { Link, useLocation } from 'react-router-dom';
import home_logo from '../../assets/images/home_logo.svg';
import './Header.scss';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isAccueilActive = currentPath === '/';
    const isAboutActive = currentPath === '/a-propos';

    return (
        <header>
            <Link to="/">
                <img src={home_logo} alt="logo de kasa" />
            </Link>
            <nav className="navbar">
                <ul>
                    <li className={`header li ${isAccueilActive ? 'active' : ''}`}><Link to="/">Accueil</Link></li>
                    <li className={`header li ${isAboutActive ? 'active' : ''}`}><Link to="/a-propos">A propos</Link></li>
                </ul>        
            </nav>
        </header>
    )
}

export default Header;