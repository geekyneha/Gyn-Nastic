import "./App.css";

import Header from "./components/sections/header/Header";
import AppLayout from "./components/pages/AppLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./components/pages/About/About";

import Login from "./components/pages/Login/Login";
import Trainers from "./components/pages/Trainers/Trainers";
import SignUp from "./components/pages/Signup/SignUp";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<AppLayout />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/view-team" element={<Trainers />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
