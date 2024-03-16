
import PropTypes from "prop-types";


const Total = ({ preparingItem }) => {
    

    
  return (
    <div className="flex gap-5 font-bold bg-green-500 text-white px-1 py-1">
      <p className="border-2 p-1 text-center rounded-md">
        Total Time:{" "}
        {preparingItem.reduce(
          (p, c) => p + parseInt(c.preparing_time.slice(0, 3)),
          0
        )}{" "}
        Minutes.
      </p>
      <p className="border-2 p-1 text-center rounded-md">
        Total Calories:{" "}
        {preparingItem.reduce(
          (p, c) => p + parseInt(c.calories.slice(0, 3)),
          0
        )}{" "}
        Calories{" "}
      </p>
    </div>
  );
};




Total.propTypes = {
  preparingItem: PropTypes.any,
};


export default Total;