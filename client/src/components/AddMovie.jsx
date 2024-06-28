import { openDialog } from "@/redux/reducers/dialogReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteDialoue } from "./DeleteDialog";
import { FormModel } from "./FormModel";
import { MovieForm } from "./MovieForm";
import { Button } from "./ui/button";

const AddMovie = () => {
  const [isformOpen, setIsformOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end my-3 mx-4">
      <Button
        onClick={() => {
          // dispatch(openDialog())
          setIsformOpen(true);
        }}
      >
        Add Movie
      </Button>

      {/* <FormModel /> */}
      <DeleteDialoue
        isOpen={isformOpen}
        title="Add Movie"
        description={"Add movie to your watchlist"}
        children={<MovieForm setIsOpen={setIsformOpen} method="POST" />}
      />
    </div>
  );
};

export default AddMovie;
