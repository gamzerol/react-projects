import React from 'react';

class Tour extends React.Component {
  render() {
    return(
      <article className="single-tour" id={this.props.id}>
        <img src={this.props.image} alt={this.props.name}/>
        <footer>
          <div className="tour-info">
            <h4>{this.props.name}</h4>
            <h4 className="tour-price">${this.props.price}</h4>
          </div>
          <p>
            {this.props.info}
            <button>read more</button>
          </p>
          <button className="delete-btn">not interested</button>
        </footer>
      </article>
    )
  }
}

export default Tour;
