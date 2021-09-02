import { useEffect, useState } from "react";
import Form from "./Form/Form";
import Table from "./Table/Table";
import Search from "./Search/Search";
import './FormApp.css'

import { db } from "../firebase_config";
//import firebase from "firebase";

const FormApp = () => {
  const [tag, setTag] = useState("fname");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  // Fetching data from Firebase
  const getUsers = () => {
    db.collection("user").onSnapshot((querySnapshot) => {
      // Fetching List of Data from Database
      setUsers(
        querySnapshot.docs.map((doc) => ({
          _id_: doc.id,
          Age: doc.data().Age,
          City: doc.data().City,
          FirstName: doc.data().FirstName,
          ID: doc.data().ID,
          LastName: doc.data().LastName,
        }))
      );
    });
  };

  const saveUser = (userData) => {
    console.log(userData);
    db.collection("user").add(userData);

    alert("Data Added Successfully!!");
  };

  // Filter Handler
  const filterHandler = (filter) => {
    // console.log(filter)
    if (filter === "fname") {
      setTag("fname");
    } else if (filter === "lname") {
      setTag("lname");
    } else if (filter === "age") {
      setTag("age");
    } else if (filter === "city") {
      setTag("city");
    } else {
      setTag("#");
    }
  };

  // Search Entry
  const searchEntry = (entry) => {
    if (entry.length === 0) {
      setUsers([...users]);
    } else {
      if (tag === "fname") {
        setUsers(
          users.filter((user) => user.FirstName.toLowerCase().includes(entry))
        );
      }
      if (tag === "lname") {
        setUsers(
          users.filter((user) => user.LastName.toLowerCase().includes(entry))
        );
      }
      if (tag === "age") {
        setUsers(
          users.filter((user) => user.Age.toLowerCase().includes(entry))
        );
      }
      if (tag === "city") {
        setUsers(
          users.filter((user) => user.City.toLowerCase().includes(entry))
        );
      } else {
        return
      }
    }
  };

  const deleteEntry = (ID) => {
    console.log(ID);
    db.collection("user").doc(ID).delete();
  };

  const resetHandler = () => {
    getUsers();
  };

  return (
    <div>
      <Form onSaveUser={saveUser} />
      <Search filter={filterHandler} value={searchEntry} reset={resetHandler} />
      <Table data={users} delete={deleteEntry} />
    </div>
  );
};

export default FormApp;
