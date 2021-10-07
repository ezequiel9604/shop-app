import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "./store/cartContext";
import { FavoriteContext } from "./store/favoriteContext";

import "./css/css_reset.css";
import "./css/general_styles.css";

import Layout from "./layout/layout";
import Home from "./pages/home.component/home";
import SearchResults from "./pages/searchResults.component/searchResults";
import ItemDetails from "./pages/itemDetails.component/itemDetails";
import Cart from "./pages/cart.component/cart";
import Orders from "./pages/orders.component/orders";
import OrderDetails from "./pages/orderDetails.component/orderDetails";
import Favorites from "./pages/favorites.component/favorites";

import Login from "./layout/login.component/login";
import Signup from "./layout/signup.component/signup";

import { Items, Departments } from "./dummyData";

function App() {
  // PROPERTIES
  const [users, setUsers] = useState(null);
  const departmentList = Departments;
  const [itemList, setItemList] = useState(Items);
  const [cartList, setCartList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  // METHODS
  function addItemToFavorite(data) {
    let newItemToAdd = data;
    let condition = false;
    for (let item of favoriteList) {
      if (item.id === newItemToAdd.id) {
        condition = true;
      }
    }

    if (!condition) {
      let arr = [...favoriteList];
      arr.push(newItemToAdd);
      setFavoriteList(arr);
    } else {
      console.log("this item is already in the favorite.");
      console.log(favoriteList);
    }
  }

  function removeItemFromFavorite(id) {
    let newlist = favoriteList.filter((current) => {
      return current.id !== id;
    });
    setFavoriteList(newlist);
  }

  function addItemToCart(data) {
    let newItemToAdd = data;
    let condition = false;
    for (let item of cartList) {
      if (item.id === newItemToAdd.id) {
        condition = true;
      }
    }
    if (!condition) {
      let arr = [...cartList];
      arr.push(newItemToAdd);
      setCartList(arr);
    } else {
      console.log("this item is already in the cart.");
      console.log(cartList);
    }
  }

  function removeItemFromCart(id) {
    let newlist = cartList.filter((current) => {
      return current.id !== id;
    });
    setCartList(newlist);
  }

  function incrementItemInCart(id) {
    let newlist = [...cartList];
    for (let item of newlist) {
      if (item.id === id) {
        item.amount += 1;
      }
    }
    setCartList(newlist);
  }

  function decrementItemInCart(id) {
    let newlist = [...cartList];
    for (let item of newlist) {
      if (item.id === id && item.amount > 1) {
        item.amount -= 1;
      }
    }
    setCartList(newlist);
  }

  // CONTEXT PROPERTIES
  const cartContextValue = {
    cartList,
    addItemToCart,
    removeItemFromCart,
    incrementItemInCart,
    decrementItemInCart,
  };
  const favoriteContextValue = {
    favoriteList,
    addItemToFavorite,
    removeItemFromFavorite,
  };

  // RENDERING
  return (
    <Switch>
      <CartContext.Provider value={cartContextValue}>
        <FavoriteContext.Provider value={favoriteContextValue}>
          <Route path="/" exact={true}>
            <Layout user={users} departments={departmentList}>
              <Home items={itemList} />
            </Layout>
          </Route>

          <Route path="/searchResults">
            <Layout user={users} departments={departmentList}>
              <SearchResults items={itemList} />
            </Layout>
          </Route>

          <Route path="/itemDetails">
            <Layout user={users} departments={departmentList}>
              <ItemDetails items={itemList} />
            </Layout>
          </Route>

          <Route path="/cart">
            <Layout user={users} departments={departmentList}>
              <Cart items={cartList} />
            </Layout>
          </Route>

          <Route path="/favorites">
            <Layout user={users} departments={departmentList}>
              <Favorites
                items={favoriteList}
                onRemoveItemFromFavorite={removeItemFromFavorite}
              />
            </Layout>
          </Route>

          <Route path="/orders">
            <Layout user={users} departments={departmentList}>
              <Orders />
            </Layout>
          </Route>

          <Route path="/orderDetails">
            <Layout user={users} departments={departmentList}>
              <OrderDetails onOpenModal={null} />
            </Layout>
          </Route>

          <Route path="/login">
            <main>
              <Login />
            </main>
          </Route>

          <Route path="/signup">
            <main>
              <Signup />
            </main>
          </Route>
        </FavoriteContext.Provider>
      </CartContext.Provider>
    </Switch>
  );
}

export default App;