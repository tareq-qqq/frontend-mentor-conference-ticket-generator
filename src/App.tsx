import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Logo from "../assets/images/logo-full.svg";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <main>
      {/* Logo */}
      <img src={Logo} className="mx-auto w-40 py-8 md:w-40 lg:pb-12" />

      <Outlet />
    </main>
  );
}

export default App;
