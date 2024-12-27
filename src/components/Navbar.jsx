import { MdFavoriteBorder, MdOutlineSearch } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const contents = useSelector((state) => state.fav.contents);

  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  const searchQueryHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleMobileCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <nav
        className={`w-full h-full bg-gradient-to-r from-gray-800 via-purple-700 to-blue-600 
        flex justify-between items-center gap-10 py-5`}
      >
        <main className="w-full max-w-7xl mx-auto flex items-center justify-between gap-10 px-10">
          <section className="w-full flex items-center justify-start gap-10 sm:gap-14">
            <section className="font-bold text-2xl flex items-center gap-2">
              <BiMoviePlay className="bg-blue-600 p-[6px] rounded-full text-4xl text-white" />
              <Link to="/" className="text-white">FALIX</Link>
            </section>
            <ul className="hidden sm:flex items-center justify-center gap-5 sm:gap-10 font-semibold text-lg text-white">
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory("movies")}
              >
                <span>Movies</span>
                {selectedCategory === "movies" && (
                  <ul
                    className="bg-white w-40 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded shadow-lg"
                    onMouseLeave={() => setSelectedCategory(null)}
                  >
                    <Link to="/movie/nowplaying" className="hover:bg-gray-200 py-1 px-2 rounded">Now Playing</Link>
                    <Link to="/movie/popular" className="hover:bg-gray-200 py-1 px-2 rounded">Popular</Link>
                    <Link to="/movie/top-rated" className="hover:bg-gray-200 py-1 px-2 rounded">Top Rated</Link>
                    <Link to="/movie/upcoming" className="hover:bg-gray-200 py-1 px-2 rounded">Upcoming</Link>
                  </ul>
                )}
              </li>
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory("tv")}
              >
                <span>Tv</span>
                {selectedCategory === "tv" && (
                  <ul
                    className="bg-white w-40 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded shadow-lg"
                    onMouseLeave={() => setSelectedCategory(null)}
                  >
                    <Link to="/tv/airing" className="hover:bg-gray-200 py-1 px-2 rounded">Airing Today</Link>
                    <Link to="/tv/popular-tv" className="hover:bg-gray-200 py-1 px-2 rounded">Popular</Link>
                    <Link to="/tv/on-air" className="hover:bg-gray-200 py-1 px-2 rounded">On TV</Link>
                    <Link to="/tv/top-tv" className="hover:bg-gray-200 py-1 px-2 rounded">Top Rated</Link>
                  </ul>
                )}
              </li>
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory("people")}
              >
                <span>Actors</span>
                {selectedCategory === "people" && (
                  <ul
                    className="bg-white w-52 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded shadow-lg"
                    onMouseLeave={() => setSelectedCategory(null)}
                  >
                    <Link to="/person/popular" className="hover:bg-gray-200 py-1 px-2 rounded">Popular Actors</Link>
                  </ul>
                )}
              </li>
            </ul>

            {/* mobile view */}
            <section className="w-full relative flex sm:hidden justify-end items-end">
              {toggle ? (
                <AiOutlineClose
                  className="text-2xl font-bold text-white cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              ) : (
                <AiOutlineMenu
                  className="text-2xl font-bold text-white cursor-pointer"
                  onClick={() => setToggle(true)}
                />
              )}
              {toggle && (
                <ul className="w-64 h-fit absolute bg-blue-600 top-14 -right-10 z-50 py-2 px-4 flex items-start flex-col gap-4 slide-bottom">
                  <li
                    className="w-full h-full"
                    onClick={() => handleMobileCategory("movies")}
                  >
                    <span className="font-semibold text-lg cursor-pointer text-white">
                      Movies
                    </span>
                    {selectedCategory === "movies" && (
                      <ul
                        className="bg-blue-700 w-full h-fit text-white font-normal flex flex-col items-start justify-start gap-2 z-50"
                        onClick={() => setToggle(false)}
                      >
                        <Link to="/movie/nowplaying" className="py-1 px-2 hover:bg-blue-800">Now Playing</Link>
                        <Link to="/movie/popular" className="py-1 px-2 hover:bg-blue-800">Popular</Link>
                        <Link to="/movie/top-rated" className="py-1 px-2 hover:bg-blue-800">Top Rated</Link>
                        <Link to="/movie/upcoming" className="py-1 px-2 hover:bg-blue-800">Upcoming</Link>
                      </ul>
                    )}
                  </li>
                  <li
                    className="w-full h-full"
                    onClick={() => handleMobileCategory("tv")}
                  >
                    <span className="font-semibold text-lg cursor-pointer text-white">
                      TV Shows
                    </span>
                    {selectedCategory === "tv" && (
                      <ul
                        className="bg-blue-700 w-full h-fit text-white font-normal flex flex-col items-start justify-start gap-2 z-50"
                        onClick={() => setToggle(false)}
                      >
                        <Link to="/tv/airing" className="py-1 px-2 hover:bg-blue-800">Airing Today</Link>
                        <Link to="/tv/popular-tv" className="py-1 px-2 hover:bg-blue-800">Popular</Link>
                        <Link to="/tv/on-air" className="py-1 px-2 hover:bg-blue-800">On TV</Link>
                        <Link to="/tv/top-tv" className="py-1 px-2 hover:bg-blue-800">Top Rated</Link>
                      </ul>
                    )}
                  </li>
                  <Link
                    to="/person/popular"
                    className="font-semibold text-lg cursor-pointer text-white"
                    onClick={() => setToggle(false)}
                  >
                    People
                  </Link>
                  <Link
                    to="/favorite"
                    className="font-semibold text-lg cursor-pointer text-white"
                  >
                    Favorite
                  </Link>
                </ul>
              )}
            </section>
          </section>

          <section className="hidden sm:flex items-center justify-center gap-5">
            <Link to="/favorite">
              <MdFavoriteBorder
                className={`w-6 h-6 font-semibold cursor-pointer ${
                  contents.length > 0 ? "text-red-500" : "text-white"
                }`}
              />
            </Link>
            <div className="relative hidden md:block">
              {search ? (
                <section className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search for a movie, TV show, person..."
                    className="px-2 py-1 rounded-3xl outline-none border-none text-gray-400 text-sm sm:text-base"
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                  />
                  <AiOutlineClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setSearch(false)}
                  />
                </section>
              ) : (
                <MdOutlineSearch
                  className="w-6 h-6 font-semibold cursor-pointer text-white"
                  onClick={() => setSearch(true)}
                />
              )}
            </div>
          </section>
        </main>
      </nav>
    </>
  );
};

export default Navbar;
