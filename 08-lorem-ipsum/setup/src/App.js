import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [loremArr, setloremArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count < 0) {
      amount = 0
    } else if(count > data.length - 1) {
      amount = data.length - 1;
    }
    setloremArr(data.slice(0, amount));
  }
  
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label for="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" value={number} onChange={(e) => setCount(e.target.value)}></input>
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {loremArr.map((lorem, id) => {
          return(
            <p key={id}>{lorem}</p>
          )
        })}
      </article>
    </section>
    )
}

export default App;
