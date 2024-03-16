import PropTypes from "prop-types";

const Total = ({ preparingItem }) => { 
  return (
    <div className="flex justify-evenly gap-5 font-semibold rounded-lg border-2 border-green-600  text-white px-1 py-1">
      <p className="border-2 p-2 text-center rounded-md bg-green-500">
        Total Time:{" "}
        {preparingItem.reduce(
          (p, c) => p + parseInt(c.preparing_time.slice(0, 3)),
          0
        )}{" "}
        Minutes.
      </p>
      <p className="border-2 p-2 text-center rounded-md bg-green-500">
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