import React from 'react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './App.css'

function App() {
  const [data, setData] = useState()
  const [itensOnPage, setItensOnPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() =>{    
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  const pages = data ? Math.ceil(data.length / itensOnPage) : undefined
  const initialPage = currentPage * itensOnPage
  const finalPage = initialPage + itensOnPage
  const currentItensOnPage = data ? data.slice(initialPage, finalPage) : undefined

  const pageButtons = data
    ? Array.from(Array(pages), (_, index) => {
        return (
          <button
            value={index}
            onClick={(e) => setCurrentPage(+e.target.value)}
            key={index} 
          > 
            {index + 1}
          </button>
        );
      })
    : undefined;

  if(data){
    return (
      <div className="App">
        <header className='header'>
          <section>
            'Logo'
          </section>
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
        <div className='main-container'>
          {currentItensOnPage.map(item => {
            return(
              <div className='product'>
                <img src={item.image} alt="product" />
                <p>{item.name} <button><FontAwesomeIcon icon={faHeart} /></button></p>
                <p>{item.rating}</p>
                <p>${item.price}</p>
              </div>
              )
            })}
        </div>
            <div>
            {pageButtons}
            </div>
            <footer>
              <div>
                Social medias
              </div>
              <div>
                Payment Options
              </div>
              <div>
                Terms and About
              </div>
            </footer>
      </div>
    )
  }
}

export default App
