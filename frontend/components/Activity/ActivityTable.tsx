import ActivityRow from "./ActivityRow";

const ActivityTable = () => {
  return (
    <div className="overflow-x-auto mt-14">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ActivityRow />
          <ActivityRow />
          <ActivityRow />
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
