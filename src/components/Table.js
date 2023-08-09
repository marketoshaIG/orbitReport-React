import './styling.css'
const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;