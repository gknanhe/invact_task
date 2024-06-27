import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import { FormModel } from "./components/FormModel";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import { Button } from "./components/ui/button";
import { store } from "./redux/store";

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Routes>
            <Route exact path="/movie-detail/:id" element={<MovieDetail />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
