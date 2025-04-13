import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./routes/App.jsx";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBody from "./components/MainBody.jsx";
import Home from "./routes/Home.jsx";
import Cart from "./routes/Cart.jsx";
import brandStore from "./store/index.js";
import Features from "./components/Features.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainBody /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/features", element: <Features /> },
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={brandStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
