import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from "react-redux";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

type Props = {
  current: string,
}
/* @ts-ignore */
const App = ({current}) => {
  return (
    <Router>
      <div className='main'>
        <Navbar/>
        <div className='decoration_line'></div>
        <Switch>
          <Route exact path='/' component={Products}/>
          <Route exact path='/cart' component={Cart}/>
          {!current ? (
              <Redirect to='/'/>
          ) : (
              <Route exact path='/product/:id' component={SingleItem}/>
          )}
        </Switch>
      </div>
    </Router>
  );
}
/* @ts-ignore */
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
