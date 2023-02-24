import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [itensOnPage, setItensOnPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const itemProduct = useRef();
  const pagesArr = [];

  const pageQuantity = data ? Math.ceil(data.length / itensOnPage) : undefined;
  const initialPage = data ? currentPage * itensOnPage : undefined;
  const finalPage = initialPage + itensOnPage;
  const showItens = data ? data.slice(initialPage, finalPage) : undefined;

  for (let i = 0; i < pageQuantity; i++) {
    pagesArr.push(i + 1);
  }

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios.get("http://localhost:3000/products").then((resp) => {
      setData(resp.data);
    });
  };

  const objectBody = (productData) => {
    const object = {
      id: productData.id,
      name: productData.name,
      description: productData.description,
      price: productData.price,
      image: productData.image,
      rating: productData.rating,
    };
    return object
  }

  const addWishList = (product) => {
    axios.post("http://localhost:3000/wishlist/", objectBody(product)).then(() => callApi());
  };

  const addToCart = (product) => {
    axios.post("http://localhost:3000/cart/", objectBody(product)).then(() => callApi());
  }

  if (data) {
    return (
      <div className="App">
        <header className="header">
          <section>'Logo'</section>
          <section>
            <input type="search" />
          </section>
          <section className="actions">
            <div className="cart">
              <button>
            <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div className="wish-list">
              <button>
            <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </section>
        </header>
        <div className="main-container">
          {showItens.map((item) => {
            return (
              <div key={item.id} className="product" ref={itemProduct}>
                <img src={item.image} alt="product" />
                <p>
                  {item.name}
                  <button onClick={() => addWishList(item)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button onClick={() => addToCart(item)}>
                    <FontAwesomeIcon icon={faCartPlus} />
                  </button>
                </p>
                <p>{item.rating}</p>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
        <div>
          {pagesArr.map((item, index) => (
            <button value={currentPage} onClick={() => setCurrentPage(index)}>
              {item}
            </button>
          ))}
        </div>
        <footer>
          <div>Social medias</div>
          <div>Payment Options</div>
          <div>Terms and About</div>
        </footer>
      </div>
    );
  }
}

export default App;
