import React from 'react'
import './App.css';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import MessageContainer from './containers/MessageContainer';


class App extends React.Component {


  render() {

    return (
      <div className="hidden-sn animated deep-purple-skin">

        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />

            <MessageContainer />

            <CartContainer />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
