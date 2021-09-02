import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { db } from "../firebase_config";
import firebase from "firebase";

import TodoListItem from "./components/TodoListItem/TodoListItem";

function TodoApp() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodo();
  }, []); // Blank to run only on First Render

  // Database data Fetching
  const getTodo = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      // Fetching List of Data from Database
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogess: doc.data().inprogress,
        }))
      );
    });
  };

  // This will be called after submitting the form.
  const addTodo = (e) => {
    e.preventDefault();
    // DataBase actions  (Collection)
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Plan Your Day</h2>
        <form>
          <TextField
            id="standard-basic"
            label="Write your Todo!"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{
              maxWidth: "500px",
              width: "90vw",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
        <div
          style={{
            maxWidth: "500px",
            width: "90vw",
            marginTop: "24px"
          }}
        >
          {todos.map((todo) => (
            <TodoListItem
              key = {todo.id}
              todo={todo.todo}
              inprogress={todo.inprogess}
              id={todo.id}
              db={db}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
