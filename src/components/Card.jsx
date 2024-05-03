import React from 'react'

const Card = ({currentImg}) => {
  return (
    <div className='cardContainer'>
        <img src={currentImg} alt="" />
    </div>
  )
}

export default Card