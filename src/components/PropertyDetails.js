import React from 'react';

const PropertyDetails = props => {
  const { title, about, amenities, price } = props.data;
  return (
    <div className='row mt-5'>
      <div className='col-md-8'>
        <h1>{title}</h1>
        <div>
          <h5>About</h5>
          <p>{about}</p>
        </div>
        <div>
          <h5>Amenities</h5>
          <ul>
            { amenities.map(amenity => <li key={amenity}>{amenity}</li>) }
          </ul>
        </div>
      </div>
      <div className='col-md-4'>
        <h4>$ {price}</h4>
      </div>
    </div>
  )
}

export default PropertyDetails;