const { Link } = require("react-router-dom");

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to={"/showbook"}>Open books</Link>
        <Link to={"/createbook"}>Add book</Link>
      </nav>
    </>
  );
}
