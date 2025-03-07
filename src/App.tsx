import { Outlet } from "react-router";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <main>
      {/* Logo */}
      <img
        src="/assets/images/logo-full.svg"
        className="mx-auto w-40 py-8 md:w-40 lg:pb-12"
      />

      <Outlet />

      {/* <div>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default App;
