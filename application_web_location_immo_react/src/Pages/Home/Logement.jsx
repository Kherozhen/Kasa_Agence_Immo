import jsonData from '../../App.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Logement() {
    const { id } = useParams();
    const location = jsonData.find(loc => loc.id === id);

    if (!location) {
        return <Link to="/error" />;
    }

    return (
        <div className="logements">
            <div>
                {location.pictures.map((picture, index) => (
                    <div key={index}>
                        <img className="bannerLogement" src={picture} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="titleLocation">
                <div className="location">
                    <h1>{location.title}</h1>
                    <h2>{location.location}</h2>
                </div>
                <div className="owner">
                    <div className="ownerText">
                        <p className="name">{location.host.name}</p>
                    </div>
                    <img src={location.host.picture} alt={location.host.name}/>
                </div>
            </div>

            <div className="spe-rating">
                <div className="specification">
                    <p>{location.tags}</p>
                </div>
                <div className="rating">{location.rating}</div>
            </div>

            <div className="collapseLogement">
                <div className="description">
                    <h3>Description</h3>
                    <p>{location.description}</p>  
                </div>
                <div className="description">
                    <h3>Équipements</h3>
                    <p>{location.equipments}</p>
                </div>
            </div>
        </div>
    )
}

export default Logement;