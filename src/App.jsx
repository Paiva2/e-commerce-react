import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState()
  const [itensOnPage, setItensOnPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = data ? Math.ceil(data.length / itensOnPage) : undefined
  const initialPage = currentPage * itensOnPage
  const finalPage = initialPage + itensOnPage
  const currentItensOnPage = data ? data.slice(initialPage, finalPage) : undefined

  const pageButtons = data
    ? Array.from(Array(pages), (item, index) => {
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

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(resJSON => setData(resJSON))
  }, [])


  if(data){
    return (
      <div className="App">
        {pageButtons}
        {currentItensOnPage.map(item => <li key={item.id}>{item.title}</li>)}
      </div>
    )
  }
}

export default App
