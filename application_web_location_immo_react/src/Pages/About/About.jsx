import Banner from '../../Components/Banner/Banner';
import imgBanner from '../../Images/ImageAbout.png';
import Collapse from '../../Components/Collapse/Collapse';

function About() {
    return (
      <div className="about">
        <Banner img={imgBanner} />
      
        <div className="collapseAbout">
            <Collapse 
              title="Fiabilité" 
              children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                et toutes les informations sont régulièrement vérifiées pas nos équipes.">
            </Collapse>

            <Collapse 
              title="Respect" 
              children="La bienvellance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                perturbation du voisinage entraînera une exclusion de notre plateforme.">
            </Collapse>

            <Collapse 
              title="Service" 
              children="La bienvellance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
                perturbation du voisinage entraînera une exclusion de notre plateforme.">
            </Collapse>

            <Collapse 
              title="Sécurité" 
              children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logements
                correspond aux critères de sécurité établi pas nos services. En laissant une note aussi bien à l'hôte qu'au 
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons 
                également des ateliers sur la sécurité domestique pour nos hôtes.">
            </Collapse>
        </div>
      </div>
    );
  }
  
  export default About;
  