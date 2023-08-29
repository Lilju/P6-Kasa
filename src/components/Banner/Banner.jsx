import './Banner.scss';

function Banner({imgSrc, title, about}) {
    return (
        <div className="banner">
        <img src={imgSrc} alt={title} className={`${about ? "about" : ""}`} /> 
            {typeof(title) !== "undefined" && <h1>{title}</h1>}       
        </div>
    );
    }

export default Banner;