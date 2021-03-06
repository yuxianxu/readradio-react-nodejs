import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LocalList from "./components/LocalList/LocalList";
import MyNotes from "./Pages/MyNotes/MyNotes";
import Login from "./Pages/Login";
import InternationalList from "./components/InternationalList/InternationalList";
import Homepage from "./Pages/Homepage/Homepage";
import WishList from "./Pages/WishList/WishList";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8080/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="main">
        <Header user={user} />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/local/*" element={<LocalList />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/mynotes"
            element={user ? <MyNotes /> : <Navigate to="/login" />}
          />
          <Route
            path="/international/*"
            element={user ? <InternationalList /> : <Navigate to="/login" />}
          />
          <Route path="/wishlist" exact element={<WishList />} />
          {/* <Route exact path="/support" component={Support}/> */}
        </Routes>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
