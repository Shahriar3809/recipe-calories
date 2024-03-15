import PropTypes from "prop-types";
import TableData from "../Recipe/TableData";

const Table = ({ wantToCook }) => {
  console.log(wantToCook);
  return (
    <div className="">
      <div>
        <h1 className="text-2xl text-center font-semibold p-5">
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
            <TableData item={item} index={index} key={item.recipe_id}></TableData>
          ))}
        </table>
      </div>

      <div>
        <h1 className="text-2xl text-center font-semibold p-5">
          Currently Cooking: 01
        </h1>
        <hr />
        <table className="w-full ">
          <tr className="w-full">
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
          <tr className="bg-gray-100 ">
            <td>1.</td>
            <td>Chicken Caesar</td>
            <td>20 minutes</td>
            <td>400 Calories</td>
            <td></td>
          </tr>
        </table>
      </div>

      <div className="flex gap-5 font-bold text-xl">
        <p>Total Time: </p>
        <p>Total Calories: </p>
      </div>
    </div>
  );
};



Table.propTypes = {
  wantToCook: PropTypes.object,
};




export default Table;
