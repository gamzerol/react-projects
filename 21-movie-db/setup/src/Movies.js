import React from 'react'
import { useGlobalContext } from './context'
import Loading from './Loading'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movie, loading } = useGlobalContext()
  console.log(movie)
  if(loading) {
    return <Loading />
  }
  return (
    <section className="movies">
      <Link to={`/movie/${movie.imdbID}`} className="movie">
        <article>
          <img src={movie.Poster} alt={movie.Title}></img>
          <div className="movie-info">
            <h4 className="title">{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        </article>
      </Link>
    </section>
  )
}

export default Movies
