import home_banner from '../../assets/images/home_banner.png';
import './Banner.scss';

function Banner() {
    return (
        <div className="banner">
        <img src={home_banner} alt="côte bretonne" />
        <div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        </div>
    );
    }

export default Banner;