import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function ItemsList(props) {
  let history = useHistory();
  function routeToItem(ev, item) {
    ev.preventDefault();
    history.push(`/item-list/${item.id}`);
  }
  return (
    <div className="items-list-wrapper">
      {props.items.map(item => (
        <div
          onClick={ev => routeToItem(ev, item)}
          className="item-card"
          key={item.id}
        >
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
