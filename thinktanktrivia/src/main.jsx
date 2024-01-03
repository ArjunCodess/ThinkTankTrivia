import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import Home from './components/Home';
import Quiz from './components/Quiz';
import About from "./components/About";
import Catalog from "./components/Catalog";
import Features from "./components/Features";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/quiz',
        element: <Catalog />
      },
      {
        path: '/quiz/html',
        element: <Quiz quiz="html" />
      },
      {
        path: '/quiz/css',
        element: <Quiz quiz="css" />
      },
      {
        path: '/quiz/javascript',
        element: <Quiz quiz="js" />
      },
      {
        path: '/quiz/webdev',
        element: <Quiz quiz="webdev" />
      },
      {
        path: '/quiz/reactjs',
        element: <Quiz quiz="reactjs" />
      },
      {
        path: '/quiz/nodejs',
        element: <Quiz quiz="nodejs" />
      },
      {
        path: '/quiz/sql',
        element: <Quiz quiz="sql" />
      },
      {
        path: '/quiz/python',
        element: <Quiz quiz="python" />
      },
      {
        path: '/quiz/responsivedesign',
        element: <Quiz quiz="responsivedesign" />
      },
      {
        path: '/quiz/git',
        element: <Quiz quiz="git" />
      },
      {
        path: '/quiz/machinelearning',
        element: <Quiz quiz="machinelearning" />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);