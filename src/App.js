import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Order from "./components/Order/Order";
import Main from "./layouts/Main";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Order />,
        },
        {
          path: "inventory",
          element: (
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          ),
        },
        {
          path: "shipping",
          element: (
            <PrivateRoute>
              <Shipping />
            </PrivateRoute>
          ),
        },
        { path: "about", element: <About /> },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
