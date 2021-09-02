import List from "./List";
import "./Table.css";

const Table = (props) => {
  const userData = props.data;
  //console.log(userData)

  const deleteHandler = (ID) => {
    props.delete(ID);
  };

  return (
    <div className="table">
      <table className="center" border="1">
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
          {userData.map((data) => {
            return (
              <List
                key={data.ID}
                ID={data._id_}
                firstName={data.FirstName}
                lastName={data.LastName}
                age={data.Age}
                city={data.City}
                delete={deleteHandler}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
