import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="md:flex md:justify-between items-center  py-6">
      <div>
        <h1 className=" text-2xl md:text-3xl font-bold">Recipe Calories</h1>
      </div>
      <div>
        <ul className="flex gap-5 text-base font-semibold cursor-pointer">
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        <p className="-mr-10 z-0">
          <FaSearch />
        </p>
        <input
          className="p-2 px-3 pl-10 rounded-full bg-slate-200"
          type="text"
          placeholder="Search"
        />
        <button>
          <FaRegUserCircle className="text-4xl bg-green-500  rounded-full p-1" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
