import { Route, Switch } from "react-router-dom";
import { Component, React } from "react";

import "./css/css_reset.css";
import "./css/general_styles.css";

import Layout from "./layout/layout";
import Modal from "./pages/modal.component/modal";

import Home from "./pages/home.component/home";
import SearchResults from "./pages/searchResults.component/searchResults";
import ItemDetails from "./pages/itemDetails.component/itemDetails";
import Cart from "./pages/cart.component/cart";
import Orders from "./pages/orders.component/orders";
import OrderDetails from "./pages/orderDetails.component/orderDetails";
import Favorites from "./pages/favorites.component/favorites";

import Login from "./layout/login.component/login";
import Signup from "./layout/signup.component/signup";

import smartTvImage from "./images/smart-tv.png";
import smartTvImage2 from "./images/smart-tv-2.png";
import smartTvImage3 from "./images/smart-tv-3.png";
import smartTvImage4 from "./images/smart-tv-4.png";
import smartTvImage5 from "./images/smart-tv-5.png";

class App extends Component {
  constructor(props) {
    super(props);

    const tlt =
      "1 Lorem ipsum dolor sit amet consectetur adipisicing umpedit iste voluptate" +
      " nulla reprehenderit tempore cum consequatur quis ut quidem.";

    this.state = {
      users: null,
      /*users: {
          code: 'USR-025489', image: UserImage,
          firstName: 'Natalie', lastName: 'Portman', 
          cartArticles: ['Audi', 'Hyundai', 'Toyota', 'Nissan'],
          favoriteArticles: [
              'Mercedes', 'Mclaren', 'Ferrari', 'Ford', 'Bugatti', 'Toyota', 'Dogde',
              'Mercedes', 'Mclaren', 'Ferrari', 'Ford'
          ]
      },*/

      departments: [
        "Ropa para mujer",
        "Ropa para hombre",
        "Carteras y Relojes",
        "Calzados",
        "Electrodomésticos",
        "Teléfonos y Comunicaciones",
        "Informática y Oficina",
        "Componentes Electrónicos",
        "Entretenimiento y Video juegos",
        "Herramientas del Hogar",
        "Automotriz",
      ],

      items: [
        {
          id: "ART-025493",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 1850,
          offerPrice: 1700,
          status: "Nuevo",
          views: 10,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 4.8,
          stock: 12,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 6,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025381",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 1150,
          offerPrice: 0,
          status: "Nuevo",
          views: 2,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 3.5,
          stock: 9,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 7,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 8,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 2,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 1,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025136",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 900,
          offerPrice: 845,
          status: "Usado",
          views: 60,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 0.8,
          stock: 13,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 3,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025014",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 800,
          offerPrice: 600,
          status: "Nuevo",
          views: 4,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 4.6,
          stock: 10,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 3,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025489",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 570,
          offerPrice: 0,
          status: "Usado",
          views: 15,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 3.8,
          stock: 7,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 3,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025322",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 1400,
          offerPrice: 1200,
          status: "Usado",
          views: 36,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 4.2,
          stock: 18,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 3,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025189",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 1600,
          offerPrice: 1400,
          status: "Reparado",
          views: 3,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 2.9,
          stock: 5,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 3,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025777",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 600,
          offerPrice: 0,
          status: "Nuevo",
          views: 39,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 1.2,
          stock: 9,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 3,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
        {
          id: "ART-025610",
          image: [
            smartTvImage,
            smartTvImage2,
            smartTvImage3,
            smartTvImage4,
            smartTvImage5,
          ],
          title: tlt,
          retailPrice: 425,
          offerPrice: 0,
          status: "Usado",
          views: 17,
          department: "Electrodomesticos",
          isInCart: false,
          addingDate: "2021-05-12",
          quality: 4.9,
          stock: 13,
          subItem: [
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "black",
              capacity: "2GB",
              size: '17"',
              stock: 5,
            },
            {
              retailPrice: 1850,
              offerPrice: 1700,
              color: "gray",
              capacity: "2GB",
              size: '17"',
              stock: 10,
            },
            {
              retailPrice: 2350,
              offerPrice: 2140,
              color: "gray",
              capacity: "4GB",
              size: '32"',
              stock: 3,
            },
            {
              retailPrice: 1980,
              offerPrice: 1910,
              color: "purple",
              capacity: "4GB",
              size: '17"',
              stock: 4,
            },
            {
              retailPrice: 2320,
              offerPrice: 2290,
              color: "green",
              capacity: "6GB",
              size: '22"',
              stock: 4,
            },
          ],
        },
      ],

      cartList: [],
      favoriteList: [],

      CartNewItems: null,
      FavoriteNewItems: null,
      IsModalOpen: false,
    };

    this.addItemToCartList = this.addItemToCartList.bind(this);
    this.removeItemFromCartList = this.removeItemFromCartList.bind(this);
    this.updateFavoriteItems = this.updateFavoriteItems.bind(this);
    this.changeStateModal = this.changeStateModal.bind(this);
    this.incrementCartItem = this.incrementCartItem.bind(this);
    this.decrementCartItem = this.decrementCartItem.bind(this);
    this.changeStateModalConfirmedCart =
      this.changeStateModalConfirmedCart.bind(this);
    this.changeStateModalConfirmedFavorite =
      this.changeStateModalConfirmedFavorite.bind(this);
  }

  removeItemFromCartList(id) {
    let newArr = this.state.cartList.filter((current) => {
      return current.id !== id;
    });

    let arr = [...this.state.items];

    for(let i of arr){
      if(i.id === id){
        i.isInCart= false;
      }
    }

    this.setState({
      CartNewItems: newArr,
      items: arr,
      IsModalOpen: true,
    });

  }

  updateFavoriteItems(id) {
    let newArr = this.state.favoriteList.filter((current) => {
      return current.id !== id;
    });

    this.setState({
      FavoriteNewItems: newArr,
      IsModalOpen: true,
    });
  }

  incrementCartItem(id) {
    let arr = [...this.state.cartList];
    for (let i of arr) {
      if (i.id === id) {
        i.amount += 1;
      }
    }
    this.setState({ cartList: arr });
  }

  decrementCartItem(id) {
    let arr = [...this.state.cartList];
    for (let i of arr) {
      if (i.id === id && i.amount > 1) {
        i.amount -= 1;
      }
    }
    this.setState({ cartList: arr });
  }

  changeStateModal() {
    this.setState((state) => ({
      IsModalOpen: !state.IsModalOpen,
    }));
  }

  changeStateModalConfirmedCart() {
    this.setState((state) => ({
      cartList: state.CartNewItems,
      IsModalOpen: false,
    }));
  }

  changeStateModalConfirmedFavorite() {
    this.setState((state) => ({
      favoriteList: state.FavoriteNewItems,
      IsModalOpen: false,
    }));
  }

  addItemToCartList(data) {

    // extracts the item that was chosen
    let newItemToAdd = data;
    for (let i of this.state.items) {
      if (i.id === newItemToAdd.id) {
        i.isInCart = true;
      }
    }

    // verifies if the item was already chosen
    let condition = false;
    for (let j of this.state.cartList) {
      if (j.id === newItemToAdd.id) {
        condition = true;
      }
    }

    // if it was not chosen than add the item
    if (!condition) {
      this.setState((state) => ({
        cartList: state.cartList.concat(newItemToAdd),
      }));
    } else {
      console.log("this item is already in the cart.");
    }

  }

  render() {

    const {items} = this.state;

    return (
      <Switch>
        <Route path="/" exact={true}>
          <Layout dummy_data={this.state}>
            <Home items={items} />
          </Layout>
        </Route>

        <Route
          path="/searchResults"
          render={(match) => {
            return (
              <Layout dummy_data={this.state}>
                <SearchResults
                  items={items}
                  onAddItemToCartList={this.addItemToCartList}
                />
              </Layout>
            );
          }}
        />

        <Route path="/itemDetails">
          <Layout dummy_data={this.state}>
            <ItemDetails
              items={items}
              onAddItemToCartList={this.addItemToCartList}
            />
          </Layout>
        </Route>

        <Route path="/cart">
          <Layout dummy_data={this.state}>
            <Cart items={this.state.cartList}
              onUpdateItems={this.removeItemFromCartList}
              onIncrementCartItem={this.incrementCartItem}
              onDecrementCartItem={this.decrementCartItem}
            />
          </Layout>
          {this.state.IsModalOpen && (
            <Modal
              kind="confirmation"
              onCloseModal={this.changeStateModal}
              onModalConfirm={this.changeStateModalConfirmedCart}
            />
          )}
        </Route>

        <Route path="/favorites">
          <Layout dummy_data={this.state}>
            <Favorites
              items={this.state.favoriteList}
              onUpdateFavorites={this.updateFavoriteItems}
            />
          </Layout>
          {this.state.IsModalOpen && (
            <Modal
              kind="confirmation"
              onCloseModal={this.changeStateModal}
              onModalConfirm={this.changeStateModalConfirmedFavorite}
            />
          )}
        </Route>

        <Route path="/orders">
          <Layout dummy_data={this.state}>
            <Orders />
          </Layout>
        </Route>

        <Route path="/orderDetails">
          <Layout dummy_data={this.state}>
            <OrderDetails onOpenModal={this.changeStateModal} />
          </Layout>
          {this.state.IsModalOpen && (
            <Modal kind="address" onCloseModal={this.changeStateModal} />
          )}
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
      </Switch>
    );
  }
}

export default App;
