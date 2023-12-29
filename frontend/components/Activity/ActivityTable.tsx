import ActivityRow from "./ActivityRow";

const ActivityTable = (props: any) => {
  console.log("gg", props);
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
            <th>Sender</th>
            <th>Pool Address</th>
            <th>Flow Rate</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {props.streamInfo.map((stream: any) => {
            return (
              <ActivityRow key={stream.createdAtTimestamp} stream={stream} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;
