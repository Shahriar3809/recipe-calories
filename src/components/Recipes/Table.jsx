

const Table = () => {
    return (
      <div className="w-5/12">
        <div>
          <h1 className="text-2xl text-center font-semibold p-5">
            Want to Cook: 01
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
              <td>
                <button className="p-1 px-4 text-white rounded-full bg-green-500 m-2">
                  Preparing
                </button>
              </td>
            </tr>
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
              <td>
               
              </td>
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

export default Table;