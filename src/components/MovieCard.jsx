const MovieCard = ({ movie: {title, vote_average, poster_path, release_date, original_language } }) => {
  return (
     <div  className="movie-card hover:scale-105 transition-transform duration-200">
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : './No-Poster-long.png'} 
             alt={`${title} Poster`} 
        />
        <div className="mt-4">
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="content">
            <div className="rating">
                <img src="./star.svg" alt="Star icon" />
                <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            </div>
            <span>•</span>
            <p className="lang">{original_language}</p>

            <span>•</span>
            <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>

    </div>
  )
}
export default MovieCard