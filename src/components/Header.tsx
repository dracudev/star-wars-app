import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function Header() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header>
      <h1>Redux Toolkit Example</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Username: {user.username}</li>
      </ul>
    </header>
  );
}
