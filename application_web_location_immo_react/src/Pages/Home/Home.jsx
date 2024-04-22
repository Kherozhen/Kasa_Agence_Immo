import React from "react";
import { Link } from 'react-router-dom';
import jsonData from '../../App.json';

function Home() {

  return (
    <div className="home">
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      
      <div className="locations">
        {jsonData.map((item, index) => (
          <Link to="/locationCard">
            <article className="locationCard" key={index}>
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
