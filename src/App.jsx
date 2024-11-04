import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta
          charset="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Helmet>
      <main className="overflow-y-scroll no-scrollbar">
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <Navbar />
            </Home>
          }
        />
        <Route
          path="/destination"
          element={
            <Destination>
              <Navbar />
            </Destination>
          }
        />
        <Route
          path="/crew"
          element={
            <Crew>
              <Navbar />
            </Crew>
          }
        />
        <Route
          path="/technology"
          element={
            <Technology>
              <Navbar />
            </Technology>
          }
        />
      </Routes>
      </main>
    </BrowserRouter>
  );
}
