import React from 'react'

const Design = (props) => {
  return (
    <div className='designs'>
        <h4>{props.carName} </h4>
      <p>{props.details} </p>
      <button>{props.learnMore} </button>
    </div>
  )
}

export default Design
