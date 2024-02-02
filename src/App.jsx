/* eslint-disable react/prop-types */
import "./App.css";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
