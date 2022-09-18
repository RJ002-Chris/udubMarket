import React from 'react';

function CartCard(props) {
    const itemData = props.itemData;

    return (
        <tr>
            <td>{itemData.itemName}</td>
            <td>{itemData.Seller}</td>
            <td>{itemData.itemPrice}</td>
        </tr>
    )
}

export default function CartList(props) {
    const cartCards = props.currCart.map((item) => {
        if (item.inCart) {
            return <CartCard key={item.itemName} itemData={item}/>
        }
    })

    return (
        <div class="container"  id="padding-b">
            <h2>Shopping Cart</h2>
            
            <table class="cart" id="padding-b">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Seller</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                {cartCards} 
            </table>
            <button type="submit" className="btn btn-secondary">
                Checkout
            </button>
        </div>
    )
}