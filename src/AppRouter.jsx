import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home, ErrorPage, Recipe, SurpriseRecipe } from "./pages";

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
        {
          path: "/recipe/:id",
          element: <Recipe />,
        },
        {
          path: "/recipe/0",
          element: <SurpriseRecipe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
