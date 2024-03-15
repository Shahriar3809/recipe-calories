
import PropTypes from "prop-types";


const Total = ({ preparingItem }) => {
    

    
  return (
    <div className="flex gap-5 font-bold text-xl bg-green-500 text-white px-1 py-5">
      <p>Total Time: {preparingItem.reduce((p, c) => p + parseInt(c.preparing_time.slice(0, 3)), 0)} Minutes.</p>
      <p>Total Calories: {preparingItem.reduce((p, c) => p + parseInt(c.calories.slice(0, 3)), 0)} Calories </p>
    </div>
  );
};




Total.propTypes = {
  preparingItem: PropTypes.any,
};


export default Total;