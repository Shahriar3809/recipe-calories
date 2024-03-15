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
    <div className="border-2 rounded-xl">
      <div className="grid grid-cols-2">
        <div className="card w-72 h-[500px] bg-base-100 shadow-xl">
          <figure className="px-3 pt-3">
            <img
              src={recipe_image}
              alt="Shoes"
              className="rounded-xl h-[200px]"
            />
          </figure>
          <div className="p-3 space-y-1">
            <h2 className="card-title">{recipe_name}</h2>
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
                className="btn btn-primary"
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
