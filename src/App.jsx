import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
  const [data, setData] = useState();
  const [itensOnPage, setItensOnPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const itemProduct = useRef()
  const pagesArr = []

    const pageQuantity = data ? Math.ceil(data.length / itensOnPage) : undefined
    const initialPage = data ? currentPage * itensOnPage : undefined
    const finalPage = initialPage + itensOnPage
    const showItens =  data ? data.slice(initialPage, finalPage) : undefined

  for(let i = 0; i < pageQuantity; i++){
    pagesArr.push(i + 1)
  }

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios.get("http://localhost:3000/products").then((resp) => {
      setData(resp.data);
    });
  };

  const object = {
    id: 21,
    name: "aaaaaaa",
    description: "aaaaaaaaaaa",
    price: 9999.99,
    image: "https://i.postimg.cc/NMM8QgV4/Women-s-Trench-Coat.jpg",
    rating: 4.5,
  };
  const addWishList = (e) => {
    e.preventDefault();
    console.log(itemProduct);
    //axios.post("http://localhost:3000/products", object).then(() => callApi());
  };

  if (data) {
    return (
      <div className="App">
        <header className="header">
          <section>'Logo'</section>
          <section>
            <input type="search" />
          </section>
          <section>
            <FontAwesomeIcon icon={faHeart} />
          </section>
          <section>
            <FontAwesomeIcon icon={faCartShopping} />
          </section>
        </header>
        <div className="main-container">
          {showItens.map((item) => {
            return (
              <div key={item.id} className="product" ref={itemProduct}>
                <img src={item.image} alt="product" />
                <p>
                  {item.name}
                  <button onClick={() => addWishList(item.id)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </p>
                <p>{item.rating}</p>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
        <div>{pagesArr.map((item, index) => <button value={currentPage} onClick={() => setCurrentPage(index)}>{item}</button>)}</div>
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
