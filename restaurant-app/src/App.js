import React from "react";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./views/Home"
import WorkerRegister from "./views/WorkerRegister"
import Login from "./views/LogIn";
import AdminPanel from "./views/AdminPanel";
import './App.css'
import ClientLogin from "./views/ClientLogin"
import AdminTables from "./views/AdminTables";
import TableCreation from "./views/TableCreation";
import injectContext from "./store/appContext";
import Users from "./views/Users";
import Products from "./views/Products"
import AddProducts from "./views/AddProduct";
import KitchenOrders from "./views/KitchenOrders";
import UserEdit from "./views/UserEdit";
import ProductEdit from "./views/ProductEdit";
import TableView from "./views/TableView";
import AddOrder from "./views/AddOrder";
import UserMainView from "./views/UserMainView";
import MasterRoute from "./layout/masterLayout"

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/client-login" component={ClientLogin} />
        <Route exact path="/worker-register" component={WorkerRegister} />
        <MasterRoute exact path="/admin-panel" component={AdminPanel} />
        <MasterRoute exact path="/admin-tables" component={AdminTables} />
        <MasterRoute exact path="/table-creation" component={TableCreation} />
        <MasterRoute exact path="/users" component={Users} />
        <MasterRoute exact path="/products" component={Products} />
        <MasterRoute exact path="/add-product" component={AddProducts} />
        <MasterRoute exact path="/kitchen-orders" component={KitchenOrders} />
        <MasterRoute exact path="/user-edit/:id" component={UserEdit} />
        <MasterRoute exact path="/product-edit/:id" component={ProductEdit} />
        <MasterRoute exact path="/table-view/:id" component={TableView} />
        <MasterRoute exact path="/add-order/table/:id" component={AddOrder} />
        <Route exact path="/user/table-id" component={UserMainView} />
      </Switch>
    </Router>
  );
}

export default injectContext(App);
