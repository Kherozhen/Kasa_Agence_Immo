import { Link } from 'react-router-dom';
import jsonData from '../../App.json';
import Banner from '../../Components/Banner/Banner';
import imgBanner from '../../Images/ImageHome.png';

function Home() {

  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" img={imgBanner} />
      <div className="locations">
        {jsonData.map((item, index) => (
          <Link to={`/locationCard/${item.id}`} key={index}>
            <article className="locationCard">
                <img src={item.cover} alt={item.title} /> 
              <div>
                <h2>{item.title}</h2>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
