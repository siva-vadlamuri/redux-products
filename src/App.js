import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Containers/Services";
import Home from "./Components/Home";
import Blogs from "./Containers/Blogs";
import Products from "./Containers/Products";
import CartPage from "./Components/CartPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Slider />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About} exact></Route>
          <Route path="/services" component={Services} exact></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/blogs" component={Blogs} exact></Route>
          <Route path="/cartPage" component={CartPage} exact></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
