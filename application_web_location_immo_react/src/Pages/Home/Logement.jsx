import jsonData from '../../App.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Carousel from '../../Components/Carousel/Carousel';
import Collapse from '../../Components/Collapse/Collapse';

function Logement() {
    const { id } = useParams();
    const location = jsonData.find(loc => loc.id === id);

    if (!location) {
        return <Link to="/error" />;
    }

    return (
        <div className="logements">
            <div>
                <Carousel img={location.pictures} /> 
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
                    {location.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                    
                </div>
                <div className="rating">{location.rating}</div>
            </div>

            <div className="collapseLogement">
                <div className="description">
                    <h3>Description</h3>
                    <div className='descriptionText'>
                        <Collapse>                        
                            <p>{location.description}</p> 
                        </Collapse>
                    </div>    
                </div>
                <div className="description">
                    <h3>Équipements</h3>
                    <div className='equipementText'>
                        <Collapse>
                            {location.equipments.map((equipment, index) => (
                                <p key={index}>{equipment}</p>
                            ))}
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logement;