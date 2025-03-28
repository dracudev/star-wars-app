import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import login from "../assets/login.svg";
import { Social } from "./Social";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "./shadcn-ui/button";
import useAuth from "../hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./shadcn-ui/dropdown-menu";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  const { handleLogout } = useAuth();

  return (
    <nav className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col items-center justify-between px-4 py-6 sm:flex-row">
        <Social className="order-3 mt-6 flex flex-1 justify-start space-x-3 sm:order-1 sm:mt-0"></Social>
        <Link className="mx-auto sm:order-2" to="/">
          <img src={logo} width={200} />
        </Link>
        <div className="mt-6 flex flex-1 flex-col space-y-2 sm:order-3 sm:m-0">
          {!user.isAuthenticated ? (
            <Link to="/login">
              <div className="filter-orange flex items-center justify-end transition-colors duration-300">
                <img src={login} className="mb-[1.9px] me-2" />
                <p className="flex items-center justify-end">LOG IN</p>
              </div>
            </Link>
          ) : (
            <div className="flex items-center justify-end sm:items-end">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="filter-orange flex justify-end">
                    <img src={login} className="mb-[1.9px] me-2" />
                    <p className="flex max-w-[30ch] items-center justify-end truncate">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-transparent p-0">
                  <DropdownMenuItem className="items-center justify-center bg-transparent">
                    <Button
                      onClick={handleLogout}
                      className="h-7 bg-zinc-700 p-2 transition-colors duration-300 hover:bg-orange-700"
                    >
                      Log Out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
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
