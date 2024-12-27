import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";  // Your components
import {
  Home,
  People,
  Search,
  PeopleDetails,
  MovieDetails,
  TvDetails,
  Favorite,
} from "./pages";  // Main page components

import { NowPlaying, Popular, TopRated, Upcoming } from "./pages/Movie";  // Movie related pages
import { AiringToday, OnAir, PopularTv, TopTv } from "./pages/Tv";  // TV related pages

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Toast notifications

import "./App.css";  // Global styles (if any)

const App = () => {
  return (
    <>
      <section className="w-full mx-auto overflow-hidden bg-black">
        {/* Navbar component that will be available on every page */}
        <Navbar />

        {/* Setting up the routes for the app */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Movie routes */}
          <Route path="/movie/nowplaying" element={<NowPlaying />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/top-rated" element={<TopRated />} />
          <Route path="/movie/upcoming" element={<Upcoming />} />
          
          {/* TV routes */}
          <Route path="/tv/airing" element={<AiringToday />} />
          <Route path="/tv/on-air" element={<OnAir />} />
          <Route path="/tv/popular-tv" element={<PopularTv />} />
          <Route path="/tv/top-tv" element={<TopTv />} />

          {/* Dynamic Movie and TV details */}
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
          <Route path="/tv/:tv_id" element={<TvDetails />} />

          {/* Search and People related routes */}
          <Route path="/search/:query" element={<Search />} />
          <Route path="/person/popular" element={<People />} />
          <Route path="/person/:person_id" element={<PeopleDetails />} />

          {/* Favorite page */}
          <Route path="/favorite" element={<Favorite />} />
        </Routes>

        {/* Footer component */}
        <Footer />

        {/* Toast notifications */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </section>
    </>
  );
};

export default App;
