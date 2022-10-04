import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Main from "./layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
      ],
    },
    { path: "/products", element: <Products></Products> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
