import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Link,
} from "react-router-dom";
import Home from './pages/Home/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* <Route
        path="dashboard"
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      /> */}
      {/* <Route element={<AuthLayout />}> */}
        {/* <Route
          path="login"
          element={<Login />}
        /> */}
        {/* <Route path="signup" element={<Signup />} /> */}
      {/* </Route> */}
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
