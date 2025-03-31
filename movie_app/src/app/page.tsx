import React from 'react';

const Home = () => {
  const movies = [
    {
      id: '1',
      title: 'Inception',
      comments: 232,
      rating: 4.75,
      description: 'A mind bendig thrailer by chirstopher',
    },
    {
      id: '2',
      title: 'Interstellar',
      comments: 76,
      rating: 4.5,
      description: 'A space exploration film by David',
    },
    {
      id: '3',
      title: 'The Dark Knight',
      comments: 232,
      rating: 4.9,
      description: 'An inconic Batman movie by Chirstoper Nolan',
    },
  ];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);

  return (
    <div className="bg-slate-900 p-8 rounded ">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-4 rounded shadow-2xl flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold text-yellow-500">Movies</p>
          <p>{totalMovies}</p>
        </div>

        <div className=" bg-slate-800 p-4 rounded shadow-2xl flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold text-yellow-500">Comments</p>
          <p>{totalComments}</p>
        </div>

        <div className=" bg-slate-800 p-4 rounded shadow-2xl flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold text-yellow-500">
            Average Rating
          </p>
          <p>{averageRating}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-white text-3xl font-semibold mb-4">Movie Lists</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="bg-yellow-600 rounded text-white py-4 px-6"
            >
              <span className="text-xl">{movie.title}</span>
              <p>{movie.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
