import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { useAddMovies } from "@/hooks/useMovies";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../redux/reducers/dialogReducer";
import {
  addMovie,
  editMovie,
  deleteMovie,
} from "../redux/reducers/moviesReducer";
import { formSchema } from "@/lib/constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

export function FormModel() {
  //redux use
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const movieToEdit = useSelector((state) => state.dialog.movieForEdit);
  // console.log(movieToEdit);

  //use zod validator

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: movieToEdit?.title,
      description: movieToEdit?.description,
      releaseYear: movieToEdit?.releaseYear,
      genre: movieToEdit?.genre,
      imgUrl: movieToEdit?.imgUrl,
      rating: movieToEdit?.rating,
      reviews: movieToEdit?.reviews,
    },
  });

  //use add movies from hook

  const { loading, addMovieToDB } = useAddMovies();

  const handleFormSubmit = async (values) => {
    // Do something with the form values
    const movieData = {
      title: values.title,
      description: values.description,
      releaseYear: Number(values.releaseYear),

      genre: values.genre,
      imgUrl: values.imgUrl,
      rating: Number(values.rating),
      reviews: values.reviews,
    };

    console.log(movieData);

    //send req to add movie

    await addMovieToDB(movieData);
    //add movie to state

    // dispatch(addMovie());

    // form.reset();
    form.setValue("title", "");
    form.setValue("description", "");
    form.setValue("releaseYear", "");
    form.setValue("genre", "");
    form.setValue("imgUrl", "");
    form.setValue("rating", "");
    form.setValue("reviews", "");

    //close dialoge in store
    if (!loading) dispatch(closeDialog());
  };

  return (
    <Form {...form}>
      <Dialog open={isOpen} defaultOpen={isOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Movie</DialogTitle>
            <DialogDescription>Add movie to your watchlist.</DialogDescription>
          </DialogHeader>
          {/* //custome close button  */}

          <div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full"
              onClick={() => dispatch(closeDialog())}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>

          {/* movie detal form  */}
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-muted-foreground">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="shad-textarea custom-scrollbar"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="shad-form_message" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="releaseYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Release Year
                    </FormLabel>
                    <FormControl>
                      <Input type="number" className="shad-input " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Genre
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imgUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Image URL
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Rating
                    </FormLabel>
                    <FormControl>
                      <Input type="string" className="shad-input " {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reviews"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="] text-muted-foreground">
                      Reviews
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="shad-textarea custom-scrollbar"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="shad-form_message" />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                onSubmit={() => dispatch(closeDialog())}
                disabled={loading ? true : false}
                type="submit"
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Add Movie"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Form>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-muted-foreground"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
