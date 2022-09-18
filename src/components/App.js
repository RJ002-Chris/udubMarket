import React, { useState } from 'react'; //import React Component
import '../index.css'
import Form from './Form';
import ItemList from './ItemList';
import { TopNav } from './TopNav';
import { Routes, Route, Navigate } from 'react-router-dom';
import ItemPage from './ItemPage';
import ItemDetail from './ItemDetail';
import { About } from './About';
import CartList from './CartList';
import { Alert } from 'bootstrap';

function App(props) {
    // const itemData = props.itemList;
    const [filter, setFilter] = useState('');
    const [alertMessage, setAlertMessage] = useState(null);
    const [items, setItems] = useState([]);
    // const itemData = items;

    function fetchitemList(path) {
      setAlertMessage(null);
      fetch(path)
      .then((response) => {
        const result = response.json();
        return result;
      })
      .then((data) => {
        console.log(data)
        if (data.length === 0) {
          setAlertMessage('No listings found.');
        } else {
          setItems(data);
        }
      })
      .catch((error) => {
        setAlertMessage(error.message);
      })
    }

    function addToCart(name) {
        const updatedItems = items.map(item => {
          if(item.itemName === name) {
            item.availability = true;
            item.inCart = true;
          }
          return item;
        });
        setItems(updatedItems)
      }

    const applyFilter = (newCategory) => {
        const newFilter = newCategory;
        setFilter(newFilter);
    }

    let displayedData = items;

    if (filter.category !== '') {
        displayedData = displayedData.filter(item =>
            item.itemName.toLowerCase().includes(filter)
        )
    }

  return (
    <div>
        <TopNav applyFilterCallback={applyFilter} />
        <header className="header-container">
            <div className="container">
                <h1 className="site-title">UW MARKETPLACE</h1>
                <p className="motto">The online marketplace for huskies</p>
            </div>
        </header>

        {alertMessage &&
          <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
        }

        <main>
            <Routes>
              <Route path="about" element={<About />} />
              <Route path="cart" element={<CartList currCart={items}  />} />
              <Route path="listings" element={<ItemPage />} >
                  <Route path=":itemName" element={<ItemDetail items={displayedData} cartCallBack={addToCart}/>} />
                  <Route index element={<ItemList items={displayedData} updateItemsCallBack={fetchitemList} cartCallBack={addToCart} />} />
                  {/* updateCartCallBack={fetchitemList} */}
                </Route>
                <Route path="*" element={<Navigate to="/listings" />} />
            </Routes>
        </main>

        <Form />

        <footer>
            <div className="container">
                <p>Email: <a href="mailto:uwmarketplace@uw.edu">uwmarketplace@uw.edu</a> Phone: <a href="tel:555-123-4567">555-123-4567</a> </p>
                <p className="copyright">&copy; UW Marketplace 2022</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
