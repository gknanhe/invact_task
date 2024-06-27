import { URL } from "@/lib/constants";
import {
  allMovies,
  addMovie,
  editMovie,
  deleteMovie,
} from "../redux/reducers/moviesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const useAddMovies = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const addMovieToDB = async (movieData) => {
    setLoading(true);

    try {
      const res = await fetch(`${URL}/movies/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieData }),
      });

      const data = await res.json();

      console.log("res,", data);

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(addMovie(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addMovieToDB };
};

export const useGetAllMovies = () => {
  const [loading, setLoading] = useState(false);
  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllMovies = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${URL}/movies`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.message);
        }

        dispatch(allMovies(data));
        // console.log("all movies", movies);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllMovies();
  }, []);

  return { loading };
};

export const useDeleteMovie = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const deleteSeleMovie = async (id) => {
    setLoading(true);
    console.log("id", id);
    try {
      const res = await fetch(`${URL}/movies/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.message);
      }

      dispatch(deleteMovie(id));
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, deleteSeleMovie };
};
