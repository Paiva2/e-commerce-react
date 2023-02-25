import React from 'react'

const PlaceHolder = ({text, classN}) => {
  return (
    <div className={classN}><h2>{text}</h2></div>
  )
}

export default PlaceHolder