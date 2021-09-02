import { Button, ListItem, ListItemText } from "@material-ui/core";
import "./TodoListItem.css";
// import {db} from './firebase_config'

const TodoListItem = ({ todo, inprogress, id, db }) => {
  const toggleInProgress = () => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };

  // Delete Handler
  const deleteTodo = () => {
      db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "Inprogress" : "Completed"}
        />
      </ListItem>
      <Button onClick={toggleInProgress}>
        {inprogress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
};

export default TodoListItem;
