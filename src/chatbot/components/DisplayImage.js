import React from 'react'

const DisplayImage = (props) => {
    const {imageUrl, link} = props.state.userData.product
  return (
    <div className='img-component'>
        <div className='img-container'>
            <img src={imageUrl} alt='imageDisplay'/>
        </div>
        <a href={link} target='_blank' rel='noreferrer'>Link</a>
    </div>
  )
}

export default DisplayImage