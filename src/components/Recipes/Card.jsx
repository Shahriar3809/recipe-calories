import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";

const Card = ({ data, handleCookButton }) => {
  const {
    recipe_image,
    calories,
    ingredients,
    preparing_time,
    recipe_name,
    short_description,
  } = data;
  return (
    <div className="rounded-xl ">
      <div className="">
        <div className="card w-full p-1 h-[600px] bg-gray-100 border-4 border-green-500 shadow-xl">
          <figure className="m-3 h-72 rounded-t-2xl ">
            <img src={recipe_image} alt="" className="w-full h-full" />
          </figure>
          <div className="  p-3 space-y-1">
            <h2 className="font-bold text-xl">{recipe_name}</h2>
            <p>{short_description}</p>
            <hr />
            <h3 className="font-bold text-xl">
              Ingredients: {ingredients.length}
            </h3>
            <ul className="list-disc pl-5">
              {ingredients.map((item, index) => (
                <li key={index}>{item} </li>
              ))}
            </ul>
            <hr />
            <div className="flex justify-around">
              <div className="flex items-center gap-2">
                <MdOutlineWatchLater />
                <p> {preparing_time}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaFireAlt />
                <p> {calories}</p>
              </div>
            </div>
            <div className="card-actions">
              <button
                onClick={() => handleCookButton(data)}
                className="btn btn-primary border-none text-white bg-green-600"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


Card.propTypes = {
  data: PropTypes.object,
  handleCookButton: PropTypes.func
};



export default Card;
