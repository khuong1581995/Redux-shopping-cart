import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index'

class CartContainer extends React.Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmont(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var { onDeleteProductToCart, onChangeMessage, onUpdateProductInCart } = this.props
        var result = <tr>
            <td>
                {Message.MSG_CART_EMPTY}
            </td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductToCart={onDeleteProductToCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                )
            })
        }
        return result
    }

    showTotalAmont = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result
    }

}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({

        }),
        quantity: PropTypes.number.isRequired
    })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductToCart: (product) => {
            dispatch(actRemoveProductInCart(product))
        },

        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },

        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }



    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
