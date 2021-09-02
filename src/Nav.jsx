//import TodoApp from './TodoApp/TodoApp';
const Nav = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Assignments
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/todo">
              Todo App
            </a>
            <a className="nav-link" href="table">
              Form App
            </a>
            <a className="nav-link" href="/tickingclock">
              Ticking Clock
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;