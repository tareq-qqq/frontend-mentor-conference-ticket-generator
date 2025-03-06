import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  const [submitted, setSubmitted] = useState(false);

  function onPopstate(e: PopStateEvent) {
    if (e.state !== undefined) {
      setSubmitted(e.state.submitted);
    }
  }

  useEffect(() => {
    history.replaceState({ submitted: false }, "", document.location.href);

    window.addEventListener("popstate", onPopstate);

    return () => {
      window.removeEventListener("popstate", onPopstate);
    };
  }, []);

  return (
    <main>
      {/* <button
        className="text-5xl text-white"
        onClick={() => {
          setSubmitted(true);
          history.pushState({ submitted: true }, "", "submitted");
        }}
      >
        Test
      </button> */}

      {/* Logo */}
      <img
        src="/assets/images/logo-full.svg"
        className="mx-auto w-40 py-8 md:w-auto"
      />

      {!submitted ? (
        <Form />
      ) : (
        <h2 className="text-6xl text-white">Submitted</h2>
      )}

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
