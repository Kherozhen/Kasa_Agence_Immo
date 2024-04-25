import Banner from '../../Components/Banner/Banner';
import imgBanner from '../../Images/ImageAbout.png';


function About() {
    return (
      <div className="about">
        <Banner img={imgBanner} />
      
        <div className="aboutCollapses">
          <div className="collapse">
            <p>Fiabilité</p>
          </div>
          <div className="collapse">
            <p>Respect</p>
          </div>
          <div className="collapse">
            <p>Service</p>
          </div>
          <div className="collapse">
            <p>Sécurité</p>
          </div>

        </div>
      </div>
    );
  }
  
  export default About;
  