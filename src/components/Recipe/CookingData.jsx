import PropTypes from "prop-types";

const CookingData = ({ data, key, index }) => {
    console.log(index)
  const { recipe_name, preparing_time, calories } = data;
  return (
    <tr className="bg-gray-100 ">
      <td>{index+1}</td>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      <td></td>
    </tr>
  );
};

CookingData.propTypes = {
  data: PropTypes.any,
  key: PropTypes.number,
  index: PropTypes.number
};

export default CookingData;
