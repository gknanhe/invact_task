import { openDialog } from "@/redux/reducers/dialogReducer";
import React from "react";
import { useDispatch } from "react-redux";
import { FormModel } from "./FormModel";
import { Button } from "./ui/button";

const AddMovie = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end my-3 mx-4">
      <Button onClick={() => dispatch(openDialog())}>Add Movie</Button>

      <FormModel />
    </div>
  );
};

export default AddMovie;
