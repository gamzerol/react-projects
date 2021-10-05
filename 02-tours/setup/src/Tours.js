import React, { useState } from 'react';
import Tour from './Tour';
import data from './data';

const [tours, setInfo] = useState(data);
class Tours extends React.Component {
  render() {
    return(
      tours.map(tour => {
        <Tour image={tour.image} name={tour.name} price={tour.price} info={tour.info}/>
      })
    )
  }
}

export default Tours;
