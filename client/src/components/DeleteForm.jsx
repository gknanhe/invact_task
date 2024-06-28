import React from "react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteMovie } from "@/hooks/useMovies";
const formSchema = z.object({
  movieId: z.string(),
});

export default function DeleteForm({ movieId, setIsOpen }) {
  const dispatch = useDispatch();
  // const isOpen = useSelector((state) => state.dialog.isOpen);

  const { loading, deleteSeleMovie } = useDeleteMovie();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      movieId: movieId,
    },
  });

  // const isLoading = form.formState.isSubmitting;

  const onSubmit = async () => {
    try {
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6  sm:px-0 px-4"
      >
        <div className="w-full gap-2 flex justify-center sm:space-x-6">
          <Button
            size=""
            variant="outline"
            disabled={loading}
            className="w-full text-muted-foreground sm:block"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            size="lg"
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-400"
            onClick={() => {
              deleteSeleMovie(movieId);
            }}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting
              </>
            ) : (
              <span>Delete</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
