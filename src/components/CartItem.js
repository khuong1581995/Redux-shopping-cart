import React from 'react';
import * as Message from './../constants/Message'

class CartItem extends React.Component {

  render() {
     var {item}= this.props;
    //  console.log(item);
     var {quantity} = item
    //  console.log(quantity);
     
    return (

        <tr>
            <th scope="row">
            <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong style={{color: 'green'}}>{item.product.name}</strong>
                </h5>
            </td>
            <td style={{color: 'red', fontSize: '16px'}}>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty" style={{color: 'red', fontSize: '16px'}}>{quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label onClick={()=>this.onUpdateQuantity(item.product, item.quantity - 1)} className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a  href="faq.html">-</a>
                    </label>
                    <label  onClick={()=>this.onUpdateQuantity(item.product, item.quantity +1)} className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light">
                        <a href="faq.html">+</a>
                    </label>
                </div>
            </td>
            <td style={{color: 'red', fontSize: '20px'}}>{item.product.price * item.quantity}$</td>
            <td>
                <button onClick={()=>{this.onDelete(item.product)}} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item">
                    X
                </button>
            </td>
        </tr>
                                   
                
    );
  }
  onUpdateQuantity=(product,quantity)=>{
    //   console.log(product, quantity);
      if(quantity>0){
          var{onUpdateProductInCart,onChangeMessage}=this.props;
       
          onUpdateProductInCart(product,quantity);
          onChangeMessage(Message.MSG_UPDATE_CART_SUCCES)
      }
  }

  onDelete=(product)=>{
// console.log(product);
var {onDeleteProductToCart,onChangeMessage}= this.props;
onDeleteProductToCart(product);
onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCES)
  }
}

export default CartItem;
