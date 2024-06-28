# Movie Watchlist Application

<br/>
<p align="center">
  <img height="450" width="1000" src="https://github.com/gknanhe/codeial-nodejs-website/assets/74034986/6247445a-a6ff-4f79-99ec-be5e49ddfd20">
<!-- <img height="400" width="800" src="https://user-images.githubusercontent.com/76626529/182868886-3f26cbc9-f619-4250-8951-0d834805251c.png"> -->
</p>
<br/>

## 🔗 Links

> ## Checkout the Website [Web Application](https://invact-task.vercel.app/)

<br/>

## Description

This is a Movie Watchlist application built with React, Redux, and Zod. The application allows users to add, edit, and delete movies from their watchlist. It uses form validation to ensure that the input data is correct.

## Features

- Add new movies to the watchlist.
- Edit existing movies in the watchlist.
- Delete movies from the watchlist.
- Form validation using Zod.
- Redux for state management.
- React Hook Form for handling form state and validation.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/moviewatchlist.git
   ```

## Navigate to the project directory:

      ```sh

      cd moviewatchlist

### Install the dependencies:

      npm install

### Usage

Start the development server:

        npm start
        Open your browser and go to http://localhost:3000.

## Components

### Home

The Home component displays the list of movies in the watchlist. It uses the useGetAllMovies hook to fetch the movies from the server and updates the component when movies are added, edited, or deleted.

### AddMovie

The AddMovie component provides a form for adding new movies to the watchlist. It uses React Hook Form and Zod for form validation.

### EditMovie

The EditMovie component allows users to edit existing movies in the watchlist.

### DeleteForm

The DeleteForm component allows users to delete movies from the watchlist.

### State Management

### moviesSlice

The moviesSlice handles the state for the movies in the watchlist. It includes actions for fetching all movies, adding a movie, editing a movie, and deleting a movie.

## Hooks

### useGetAllMovies

The useGetAllMovies hook fetches all movies from the server and updates the Redux store.

### useEditMovie

The useEditMovie hook handles the logic for editing a movie in the database and updating the Redux store.

### Form Validation

Form validation is handled using Zod and React Hook Form. The zodResolver is used to validate form data against the defined schema.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
