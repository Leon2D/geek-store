import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient } from "react-query";

/*Component pages list*/
import Login from "../pages/login/Login"
import ProductList from "../pages/product/list/ProductList";
import NewProduct from "../pages/product/single/NewProduct";
import UpdateProduct from "../pages/product/single/UpdateProduct";
import ViewProduct from "../pages/product/single/ViewProduct";
import UserList from "../pages/user/list/UserList";
import NewUser from "../pages/user/single/NewUser";
import UpdateUser from "../pages/user/single/UpdateUser";
import ViewUser from "../pages/user/single/ViewUser";
import Header from "./Header";
import Footer from "./Footer";
let loggedIn=false;
debugger;
let IsAdmin=false;

export default function RouterMap() {
  return (
      <div>
        <Router>
        {loggedIn ? <Header/> : null }
          
          <Switch>
            {/*Login*/}  
            <Route exact path="/">
              {loggedIn ? <Redirect to="/products"/> : <Redirect to="/login"/> }
            </Route>
            <Route strict exact path="/login" component={Login} />
            {/*Admin pages*/}
            {IsAdmin ? 
              <Switch>
                <Route strict exact path="/new-user" component={NewUser} />
                <Route strict exact path="/new-product" component={NewProduct} />
                <Route strict exact path="/update-user/:id?" component={UpdateUser} />
                <Route strict exact path="/update-product/:id?"component={UpdateProduct}/>
              </Switch>
            : loggedIn ? <Redirect to="/products"/> : <Redirect to="/login" />
            }
            {/*Users pages*/}
            {loggedIn ? 
              <Switch>
                <Route strict exact path="/products" component={ProductList} />
                <Route strict exact path="/users" component={UserList} />
                <Route strict exact path="/view-user/:id?" component={ViewUser} />
                <Route strict exact path="/view-product/:id?"component={ViewProduct}/>
              </Switch>
            : <Redirect to="/login"/>}
          </Switch>
          <Footer/>
        </Router>
      </div>
  );
}
