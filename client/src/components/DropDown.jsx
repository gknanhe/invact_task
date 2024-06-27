"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { openDialog, setMovieForEdit } from "@/redux/reducers/dialogReducer";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteMovie } from "@/hooks/useMovies";
function DropdownAction({ movie }) {
  const [position, setPosition] = React.useState("bottom");
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const { loading, deleteSeleMovie } = useDeleteMovie();
  console.log(movie._id);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          variant="outline"
          className="bg-transparent outline-none focus-visible: "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-more-horizontal"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="edit"
            onClick={() => {
              dispatch(openDialog());
              dispatch(setMovieForEdit(movie));
            }}
          >
            Edit
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="delete"
            onClick={() => {
              deleteSeleMovie(movie._id);
            }}
          >
            Delete
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownAction;
