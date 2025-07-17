import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routerConfig } from "./routes";

const router = createBrowserRouter(routerConfig);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
