import PropTypes from "prop-types";

const TableData = ({item, index}) => {
  const { recipe_name, calories, preparing_time } = item;
  return (
    <tr className="bg-gray-100">
      <td>{index+1}. </td>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      <td>
        <button className="p-1 px-4 text-white rounded-full bg-green-500 m-2">
          Preparing
        </button>
      </td>
    </tr>
  );
};

TableData.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
};

export default TableData;
