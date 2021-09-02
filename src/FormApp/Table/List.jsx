import "./Table.css";

const List = (props) => {
  const deleteHandler = () => {
    //console.log(props.ID)
    props.delete(props.ID);
  };
  //console.log(props)
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.age}</td>
      <td>{props.city}</td>
      <td>
        <button onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default List;
