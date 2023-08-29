import { useState } from 'react';
import './Slideshow.scss';
import arrow_back from '../../assets/icones/arrow_back.svg';
import arrow_forward from '../../assets/icones/arrow_forward.svg';

export default function Slideshow({slideShow}) {
    const [currentImage, setCurrentImage] = useState(0);

    const previousImage = () => {
        setCurrentImage(currentImage === 0 ? slideShow.length - 1 : currentImage - 1);
    };

    const nextImage = () => {
        setCurrentImage(currentImage === slideShow.length - 1 ? 0 : currentImage + 1);
    };

    return (
        <section className="slideshow">
            <img className="slideshow_image" src={slideShow[currentImage]} alt="Slideshow" />
                {slideShow.length > 1 && 
                    <>
                        <img 
                        className="slideshow_arrow_back" 
                        src={arrow_back} 
                        alt="Show previous" 
                        onClick={previousImage}/>
                        <img 
                        className="slideshow_arrow_forward" 
                        src={arrow_forward} 
                        alt="Show next" 
                        onClick={nextImage}/>
                        <p className="imageCounter">{currentImage + 1}/{slideShow.length}</p>
                    </>
                }
        </section>
        );
    }