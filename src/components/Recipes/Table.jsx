import PropTypes from "prop-types";
import TableData from "../Recipe/TableData";
import CookingData from "../Recipe/CookingData";
import Total from "../Recipe/Total";

const Table = ({ wantToCook, handlePreparing, preparingItem }) => {

  return (
    <div className="">
      <div>
        <h1 className="text-2xl text-center font-semibold py-2 text-white bg-green-500">
          Want to Cook: {wantToCook.length}
        </h1>
        <hr />
        <table className="w-full space-y-3">
          <tr className="w-full">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
          {wantToCook.map((item, index) => (
            <TableData
              item={item}
              index={index}
              handlePreparing={handlePreparing}
              key={item.recipe_id}
            ></TableData>
          ))}
        </table>
      </div>

      <div className="my-8">
        <h1 className="text-2xl text-center font-semibold py-2 mt-16 text-white bg-green-500">
          Currently Cooking: {preparingItem.length}
        </h1>
        <hr />
        <table className="w-full ">
          <tr className="w-full">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
          {preparingItem.map((item, index) => (
            <CookingData key={index} index={index} data={item}></CookingData>
          ))}
        </table>
      </div>

      <Total preparingItem={preparingItem}></Total>
    </div>
  );
};



Table.propTypes = {
  wantToCook: PropTypes.object,
  handlePreparing: PropTypes.func,
  preparingItem: PropTypes.any
};




export default Table;
