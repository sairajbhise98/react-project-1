import { useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [searchText, setText] = useState("");

  const searchHandler = (event) => {
    // console.log(searchText)
    event.preventDefault();
    props.value(searchText.toLowerCase());
    setText("");
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setText("");
    props.value(searchText);
    props.reset();
  };

  const filterHandler = (event) => {
    props.filter(event.target.value);
  };

  return (
    <div>
      <form className="search">
        <select className="filter" onChange={filterHandler}>
          <option value="#">Filter By</option>
          <option value="fname">First Name</option>
          <option value="lname">Last Name</option>
          <option value="age">Age</option>
          <option value="city">City</option>
        </select>
        <input
          value={searchText}
          type="text"
          onChange={(e) => {
            setText(e.target.value.trim());
          }}
        />
        <br></br>
        <button onClick={searchHandler}>Search</button>
        <button onClick={resetHandler}>Reset</button>
        <p>Reset the table after searching</p>
      </form>
    </div>
  );
};

export default Search;
