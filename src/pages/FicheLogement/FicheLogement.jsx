import { useParams, Navigate } from 'react-router-dom';
import './FicheLogement.scss';
import Slideshow from '../../components/Slideshow/Slideshow';
import logements from '../../data/logements.json';
import Collapse from '../../components/Collapse/Collapse';
import star_active from '../../assets/icones/star_active.svg';
import star_inactive from '../../assets/icones/star_inactive.svg';

export default function FicheLogement() {
    const id = useParams().id;
        
    const logement = logements.find((logement) => logement.id === id);
   
    if (!logement) {
        return <Navigate to="/404" />;
    }

    const picturesList = logement.pictures;
    const tags = logement.tags;
    const equipements = logement.equipments;
    const ratingNumber = logement.rating;
    const hostPicture = logement.host.picture;

    return (
        <>
        <Slideshow slideShow={picturesList}/>
        <main className="ficheLogement">
            <div className="ficheLogement_container">
                <article className="details_logement">
                    <div className="details_container">
                        <div className="details_logement_container">
                            <h1 className="details_logement_title">{logement.title}</h1>
                            <p className="details_logement_location">{logement.location}</p>
                        </div>                           
                        <div className="tag_container">
                            {tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="host_rating_container">
                        <div className="details_logement_host">
                            <p className="details_logement_host_name">{logement.host.name}</p>
                            <img className="details_logement_host_picture" src={hostPicture} alt={logement.host.name} />
                        </div>
                        <div className="details_logement_rating">
                            <img className="details_logement_rating_star" src={ratingNumber >= 1 ? star_active : star_inactive} alt="star" />
                            <img className="details_logement_rating_star" src={ratingNumber >= 2 ? star_active : star_inactive} alt="star" />
                            <img className="details_logement_rating_star" src={ratingNumber >= 3 ? star_active : star_inactive} alt="star" />
                            <img className="details_logement_rating_star" src={ratingNumber >= 4 ? star_active : star_inactive} alt="star" />
                            <img className="details_logement_rating_star" src={ratingNumber >= 5 ? star_active : star_inactive} alt="star" />
                        </div>
                    </div>                    
                </article>
                <article className="description_logement">
                    <Collapse title="Description" description={logement.description} />
                    <Collapse title="Équipements" description={equipements} />
                </article>
            </div>
        </main>
        </>
    );
}
