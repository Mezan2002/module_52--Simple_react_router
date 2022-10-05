import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";
import Main from "./layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/products", element: <Products></Products> },
        {
          path: "/users",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Users></Users>,
        },
        {
          path: "/users/:userId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            );
          },
          element: <UserDetails></UserDetails>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div>
          <h1>404 error ! Page not Found</h1>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
