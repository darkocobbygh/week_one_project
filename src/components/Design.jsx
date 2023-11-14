import React from 'react'

const Design = (props) => {
  return (
    <div className='designs'>
        <h1>{props.carName} </h1>
      <p>{props.details} </p>
    </div>
  )
}

export default Design
