import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router";
import Form from "./components/Form.tsx";
import Ticket from "./components/Ticket.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Form />} path="/" />
          <Route path="ticket" element={<Ticket />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="grid h-screen w-full -translate-y-20 place-content-center p-6 text-center">
              <p className="text-7xl">404</p>
              <p className="text-3xl">There's nothing to show here.</p>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
