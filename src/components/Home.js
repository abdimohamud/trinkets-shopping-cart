import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(props) {
  let history = useHistory();
  const routeToShop = event => {
    event.preventDefault();
    history.push('/item-list');
  };

  return (
    <div className="home-wrapper">
      <button onClick={routeToShop} className="md-button shop-button">
        Shop now!
      </button>
      <img
        className="home-image"
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      />
    </div>
  );
}

export default Home;
