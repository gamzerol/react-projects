import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
class App extends React.Component {
  render() {
    return (
      <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
          </div>
          <Tours />
        </section>
      </main>
    )
  }
}

export default App
