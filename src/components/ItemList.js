import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard(props) {
    const itemData = props.itemData;

    let displayedText = itemData.itemName;
    if (itemData.availability) {
        displayedText = displayedText + " (in cart)"
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.cartCallBack(itemData.itemName)
    }

    // const itemNameLink = itemData.itemURL;

    return (
        <div className="col-md-6 col-xl-3 d-flex" id="card">
            <div className="row">
                <div className="col-sm-auto col-md-12 col-lg-12 col-xl-12">
                    <img src={itemData.imgSrc} alt={itemData.itemName} class="pb-3"/>
                </div>
                <div className="col-sm d-flex flex-column">
                    <h2 className="card-title">{displayedText}</h2>
                    <p className="card-text">{itemData.itemDescription}</p>
                    <a className="mt-auto btn btn-dark" onClick={handleClick}>Add to Cart</a>
                    <Link to={itemData.itemURL} className="mt-auto btn btn-primary">View more details</Link>
                </div>
            </div>
        </div>
    )
}

export default function ItemList(props) {
    const handleUpdate = () => {
        props.updateItemsCallBack("items.json");
    }

    const itemArray = props.items
    if (itemArray.length === 0) {
        return (
            <div>
                <h2 className='text-center'>Welcome to the University of Washingoton Marketplace</h2>
                <p className='text-center'>Click here to enter</p>
                <div class="text-center" onClick={handleUpdate}>
                    <button type="button" class="btn btn-primary">Enter</button>
                </div>
            </div>
        )
    }
    
    const itemCards = props.items.map((item) => {
        return <ItemCard key={item.itemName} itemData={item} cartCallBack={props.cartCallBack} />
    })

    return (
        <div>
            <h2 className="listings-head">Current Listings:</h2>
            <div className="card-deck">
                {itemCards}
            </div>
        </div>
    )
}