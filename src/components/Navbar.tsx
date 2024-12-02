import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-center">
      <div className="flex py-6">
        <img src={logo} width={200} />
        <div className="flex items-center">
          <p>LOGIN // SIGN UP</p>
        </div>
      </div>

      <div>
        <ul className="mb-10 flex items-center space-x-2">
          <li>Home</li>
          <li>Starships</li>
        </ul>
      </div>
    </nav>
  );
}
