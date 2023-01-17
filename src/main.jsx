import React from "react";
import ReactDOM from "react-dom/client";

// Router
import { BrowserRouter } from "react-router-dom";

// CSS
import "./index.css";

// Components
import App from "./components/App";
import Footer from "./components/Footer";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
