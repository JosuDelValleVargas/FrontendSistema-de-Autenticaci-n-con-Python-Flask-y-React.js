import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// prueba de guardado
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

import { Card } from "./component/card.js";
import { Footer } from "./component/footer";

// create your first component
const Layout = () => {
  // the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <h2 style= {{color: "red"}}>Characters</h2>
          <Card />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/demo" element={<Demo />} />{" "}
            <Route path="/single/:theid" element={<Single />} />{" "}
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
