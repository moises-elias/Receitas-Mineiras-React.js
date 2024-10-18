import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home, ErrorPage } from "./pages";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
