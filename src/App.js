import './App.css';
import DataFecthing from "../src/components/Product/DataFetching"
import Navbar from "../src/layout/Navbar/Navbar"
import ProductDetail from "./pages/ProductDetail/ProductDetails"
import Footer from "../src/layout/Footer/Footer"
import Cart from "../src/pages/Cart/Cart"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>  
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/:id">
              <ProductDetail />
            </Route>
            <Route path="/">
              <DataFecthing />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
