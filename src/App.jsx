import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import Login from "./routes/login/Login";
import SinglePage from "./routes/singlePage/SinglePage";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/:id",
          element: <SinglePage />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
