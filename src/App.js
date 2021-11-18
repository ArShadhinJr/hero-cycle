import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddServices from './components/AddServices/AddServices';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageOrders from './components/ManageOrders/ManageOrders';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Pay from './components/Pay/Pay';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProdectDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import Services from './components/Services/Services';
import Singup from './components/Singup/Singup';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    // Router set 
    <AuthProvider>
      <BrowserRouter>
        {/* header load in all page  */}
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/products/:productId">
            <ProdectDetails></ProdectDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/orderplace">
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <PrivateRoute exact path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute exact path="/pay">
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute exact path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/manageproducts">
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/singup">
            <Singup></Singup>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer load in all page */}
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
