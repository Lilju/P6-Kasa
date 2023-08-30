import { useState } from "react";
import arrow_open from "../../assets/icones/arrow_open.svg";
import './Collapse.scss';

function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse_container">
            <div onClick={handleClick} className={isOpen ?`collapse_title_opened`:`collapse_title_closed`}>
                {title}
                <img src = {arrow_open} alt="open or close collapse" className={isOpen ?`arrow_opened`:`arrow_closed`}/>     
            </div>
            {isOpen && <div className="collapse_description">
                {description}
                </div>}
        </div>
    )
}

export default Collapse