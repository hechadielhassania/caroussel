import React from 'react'

const Button = ({action, icon}) => {
  return (
    <button className='btn' onClick={action}>
        {icon}
    </button>
  )
}

export default Button