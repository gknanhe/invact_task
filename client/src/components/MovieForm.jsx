import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useAddMovies, useEditMovie } from "@/hooks/useMovies";
import { closeDialog } from "../redux/reducers/dialogReducer";

import { formSchema } from "@/lib/constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Loader2, X } from "lucide-react";

export function MovieForm({ setIsOpen, method, movieToEdit }) {
  //redux use
  //   const dispatch = useDispatch();
  //   const isOpen = useSelector((state) => state.dialog.isOpen);
  //   const movieToEdit = useSelector((state) => state.dialog.movieForEdit);
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
  const { editing, editMovieOnDB } = useEditMovie();
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
      // _id: movieToEdit?._id,
    };

    console.log(movieData);

    //send req to add movie
    method === "POST"
      ? await addMovieToDB(movieData, method)
      : await editMovieOnDB(movieData, movieToEdit._id, method);

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
    if (!loading) setIsOpen(false);
    // dispatch(closeDialog());
  };

  return (
    <Form {...form}>
      <div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute  text-black top-2 right-2 rounded-full"
          onClick={() => {
            // dispatch(closeDialog());
            setIsOpen(false);
          }}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">Title</FormLabel>
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
                <FormLabel className="text-muted-foreground">Genre</FormLabel>
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
                <FormLabel className="text-muted-foreground">Rating</FormLabel>
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
        <Button
          onSubmit={() => dispatch(closeDialog())}
          disabled={loading ? true : false}
          type="submit"
        >
          {loading || editing ? (
            <div role="status">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Add Movie"
          )}
        </Button>
      </form>
    </Form>
  );
}
