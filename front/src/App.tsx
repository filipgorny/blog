import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "route-views";

const router = createBrowserRouter(routes, {
  basename: "/",
});

function App() {
  return (
    <>
      <h1>App</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
