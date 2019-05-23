import React from 'react';

class CartResult extends React.Component {

    render() {
        var { cart } = this.props;
        return (


            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>


        );
    }
    showTotalAmount = (cart) => {
        let total = 0;
        if (cart.length > 0) {
            for (let index = 0; index < cart.length; index++) {
                total += cart[index].product.price * cart[index].quantity
            }
        }
        return total
        //     cart.forEach(element => {
        //         total += element.product.price * element.quantity
        //     });
        // }
        // return total
    }
}

export default CartResult;
