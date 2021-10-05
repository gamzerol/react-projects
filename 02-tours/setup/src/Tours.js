import React from 'react';
import Tour from './Tour';
import data from './data';

class Tours extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tours: data
    }
  }
  render() {
    return(
      this.state.tours.map(tour => {
        return(
          <Tour image={tour.image} name={tour.name} price={tour.price} info={tour.info}/>
        )
      })
    )
  }
}

export default Tours;
