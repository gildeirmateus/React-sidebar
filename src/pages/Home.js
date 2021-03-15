import React from 'react';
import '../styles/styles.css';
import '../styles/PagesStyles/HomeStyle.css';


function Home() {
  return (
    <div className="home">
        <header>
            <div className="img-wrapper">
                <img src="https://www.colombiaplease.com/wp-content/uploads/2021/02/andres-hernandez-fF9LOC5sMOQ-unsplash-scaled.jpg" alt="background"/>
            </div>

            <div className="banner">
                <h1>Café Sitio Ribeirão Vermelho</h1>
                <p>Localizado em Heliodora-MG</p>
                <button>Saiba mais</button>
            </div>

        </header>
    </div>
  )
}

export default Home;
