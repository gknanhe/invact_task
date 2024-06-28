"use client";

import * as React from "react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { openDialog, setMovieForEdit } from "@/redux/reducers/dialogReducer";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteMovie } from "@/hooks/useMovies";
import { Camera, Delete, Ellipsis, Pen, SquarePen, Trash2 } from "lucide-react";
import { DeleteDialoue } from "./DeleteDialog";
import { useState } from "react";
import DeleteForm from "./DeleteForm";
import { MovieForm } from "./MovieForm";
function DropdownAction({ movie }) {
  const [position, setPosition] = React.useState("bottom");
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const { loading, deleteSeleMovie } = useDeleteMovie();
  // console.log("edit movie sent", movie);
  const [isdeleteOpen, setIsdeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  //convert some values to string
  const editMovie = {
    ...movie,
    releaseYear: movie.releaseYear.toString(),
    rating: movie.rating.toString(),
  };

  // console.log(editMovie);
  return (
    <>
      <DeleteDialoue
        isOpen={isdeleteOpen}
        title="Delete Movie"
        description={"Your Movie will be deleted"}
        children={
          <DeleteForm movieId={movie._id} setIsOpen={setIsdeleteOpen} />
        }
      />
      <DeleteDialoue
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        title="Edit Person"
      >
        <MovieForm
          setIsOpen={setIsEditOpen}
          method="PUT"
          movieToEdit={editMovie}
        />
      </DeleteDialoue>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            variant="outline"
            className="bg-transparent outline-none focus-visible: "
          >
            <Ellipsis />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px] z-30">
          {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          {/* <DropdownMenuRadioGroup onValueChange={setPosition}> */}
          {/* <DropdownMenuRadioItem
              value="edit"
              onClick={() => {
                dispatch(openDialog());
                dispatch(setMovieForEdit(movie));
              }}
            >
              <Pen size={18} className="mr-2" />
              Edit
            </DropdownMenuRadioItem> */}
          <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 ">
            <button
              onClick={() => {
                setIsEditOpen(true);
                // dispatch(setMovieForEdit(movie));
                // dispatch(openDialog());
              }}
              className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
            >
              <div className="flex flex-row text-center items-center justify-center space-x-2">
                <SquarePen />
                <span className="text-sm mx-2">Edit</span>
              </div>{" "}
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 ">
            <button
              onClick={() => {
                setIsdeleteOpen(true);
              }}
              className="w-full justify-start flex text-red-500 rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
            >
              <div className="flex flex-row text-center items-center justify-center space-x-2">
                <Trash2 />
                <span className="text-sm mx-2">Delete</span>
              </div>{" "}
            </button>
          </DropdownMenuItem>
          {/* <DropdownMenuRadioItem
            value="delete"
            onClick={() => {
              // deleteSeleMovie(movie._id);
              setIsdeleteOpen(true);
            }}
          >
            <Trash2 color="red" size={18} className="mr-2" />
            Delete
          </DropdownMenuRadioItem> */}
          {/* </DropdownMenuRadioGroup> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default DropdownAction;
