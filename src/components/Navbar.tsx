import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import login from "../assets/login.svg";
import { Social } from "./Social";

export default function Navbar() {
  return (
    <nav className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col items-center justify-between px-4 py-6 sm:flex-row">
        <Social className="order-3 mt-6 flex flex-1 justify-start space-x-3 sm:order-1 sm:mt-0"></Social>

        <img src={logo} width={200} className="mx-auto sm:order-2" />

        <div className="mt-6 flex flex-1 flex-col space-y-2 sm:order-3 sm:m-0">
          <Link to="/login">
            <div className="flex items-center justify-end">
              <img src={login} className="mb-[1.9px] me-2" />
              <p className="flex items-center justify-end">LOG IN</p>
            </div>
          </Link>
          <Link to="/signup">
            <p className="flex justify-end">SIGN UP</p>
          </Link>
        </div>
      </div>

      <div className="flex h-12 w-full items-center justify-center border-y-2 border-solid border-y-zinc-800">
        <ul className="flex h-full w-full items-center justify-center">
          <Link to="/" className="h-full">
            <li className="flex h-full items-center justify-center border-l-2 border-solid border-b-orange-700 border-l-zinc-800 px-4 py-2 transition-colors duration-300 hover:h-[46px] hover:border-b-[2px] hover:border-b-orange-700 hover:text-orange-700">
              HOME
            </li>
          </Link>
          <Link to="/starships" className="h-full">
            <li className="flex h-full items-center justify-center border-x-2 border-solid border-x-zinc-800 border-b-orange-700 px-4 py-2 transition-colors duration-300 hover:h-[46px] hover:border-b-[2px] hover:border-b-orange-700 hover:text-orange-700">
              STARSHIPS
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
