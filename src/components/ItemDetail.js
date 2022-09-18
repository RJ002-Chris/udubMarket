import React from 'react';
import Button from 'react-bootstrap/Button';

import _ from 'lodash';

import { useParams } from 'react-router-dom';

function ItemDetail(props) {
  const itemData = props.items;
  const params = useParams();
  const currItemName = params.itemName; 
  let item =  _.find(itemData, {itemURL: currItemName});

  if(!item) return <h2>Something went wrong, please try again.</h2> //if unspecified

  let displayedText = item.itemName;
    if (item.availability) {
        displayedText = displayedText + " (in cart)"
    }

    const handleClick = () => {
        props.cartCallBack(item.itemName)
    }

    return (
        <div id="itempad">
          <h2 id="padding-l">{displayedText}</h2>
          <p className="lead">{item.itemDetails}</p>
          <div id="padding-b">
              <img className="d-block" src={'../'+item.imgSrc} alt={item.itemName} />
          </div>      
          <Button onClick={handleClick} variant="primary" size="lg">Add to cart</Button>
        </div>
    );
}

export default ItemDetail;