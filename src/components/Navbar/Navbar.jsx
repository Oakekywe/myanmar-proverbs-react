import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* img */}
        <Link to="/">
          <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-300 text-lg ">
            MYANMAR PROVERBS
          </h2>
        </Link>
        {/* <button> toggle</button> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>{/* link */}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
