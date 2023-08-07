import { Link } from 'react-router-dom'
import './Card.scss'

function Card({id, title, cover}) {
    return (
        <Link to={`/logements/${id}`} className="card">
            <div>
                <img src={cover} alt={title} />
                <div>
                    <h2>{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default Card