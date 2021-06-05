import './App.css';
import DataFecthing from "../src/Product/DataFetching"
import Navbar from "../src/Navbar/Navbar"
import ProductDetail from "../src/ProductDetail/ProductDetails"
import Footer from "../src/Footer/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
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
