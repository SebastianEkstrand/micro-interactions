import ReactDOM from "react-dom/client";
import "./index.css";
import "./global/default.css";
import "./global/variables.css";
import "./global/fonts.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Css from "./pages/Basics/css";
import MicroInteraction from "./pages/MicroInteraction";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Css,
    loader: undefined,
  },
  {
    path: "/Micro",
    Component: MicroInteraction,
    loader: undefined,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
