/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from './Loading'


const SingleMovie = () => {
  const { imdbID } = useParams()
  const [loading, setLoading] = useState(false)
  const [movieDetail, setMovieDetail] = useState({Ratings:[]})
  useEffect(() => {
    setLoading(true)

    async function getMovieDetails() {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=a88726d6`)
        const data = await response.json()
        console.log(data)
        if(data) {
          setMovieDetail(data)
        } else {
          setMovieDetail(null)
        }
      }catch(error) {
        console.log(error)
      }
      setLoading(false)
    }
    getMovieDetails()
  }, [imdbID])
  if(loading) {
    return <Loading />
  } else {
    return (
      <section className="single-movie">
        <img src={movieDetail.Poster} alt={movieDetail.Title} />
        <div className="single-movie-info">
          <h2>{movieDetail.Title}</h2>
          <p>{movieDetail.Plot}</p>
          <div>ratings</div>
          {movieDetail.Ratings.map((rating) => {
            <span>{rating['Source']} : {rating['Value']}</span>
          })}
          <Link to="/" className="btn">back to movies</Link>
        </div>
      </section>
    )
  }
}

export default SingleMovie
