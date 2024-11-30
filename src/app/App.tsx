import { useDispatch } from "react-redux";
import { Header } from "../components/Header";
import "./App.css";
import { useEffect } from "react";
import { addUser } from "../redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
