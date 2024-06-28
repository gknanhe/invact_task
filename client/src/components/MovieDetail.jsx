import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const movies = useSelector((state) => state.movies.movies);

  //find movie datails from array
  const selectedMovie = movies?.find((movie) => movie._id === id);

  console.log(movies);
  if (!selectedMovie) {
    return <p>Movie not found.</p>; // Handle missing movie case
  }

  const { title, releaseYear, genre, description, rating, reviews } =
    selectedMovie; // Destructure movie details

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-[350px] h-auto flex justify-center items-start flex-col gap-3 bg-[#070D23] p-10 rounded-md">
        <div className="w-full h-[auto]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyyFAZS4rB3v5KoTL2xgg2HKD3mE_1oCFBw&s"
            alt="img"
            className="rounded-md img-bg object-cover w-full h-full"
          />
        </div>
        <h1 className="font-semibold text-2xl">
          {title} <span className="mx-3">{releaseYear}</span>
        </h1>
        <p className="text-gray-500">
          <span className="mr-2 font-semibold">Genre: </span>
          {genre}
        </p>
        <p className="text-muted-foreground text-sm">
          {" "}
          <span className="mr-2 font-semibold">Description: </span>
          {description}
        </p>
        <p className="text-muted-foreground text-sm">
          <span className="mr-2 font-semibold">Review: </span>
          {reviews}
        </p>
        <div className="px-3 py-2 bg-[#222c4f] rounded-lg flex justify-center items-center gap-2">
          <span>
            <svg
              height="18"
              width="18"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 47.94 47.94"
              xmlSpace="preserve"
              fill="#ffb834"
            >
              <path
                d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
              />
            </svg>
          </span>
          {rating}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
