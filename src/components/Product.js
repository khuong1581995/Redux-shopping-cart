import React from 'react';
import * as Message from './../constants/Message';



class Product extends React.Component {


    render() {
        var { product } = this.props;
        return (


            <div className="col-lg-4 col-md-6 mb-r" >
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt={product.name} />
                        <a href="faq.html">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="faq.html">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRatings(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a onClick={(e) => this.onAddToCart(product)} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div >


        );
    }

    showRatings(rating) {
        let result = []
        if (rating > 0) {
            for (let index = 0; index < rating; index++) {
                result.push(
                    <li key={index}>
                        <i className="fa fa-star"></i>
                    </li>
                )

            }
            for (let index = 0; index < 5 - rating; index++) {
                result.push(<li key={index + 5}>
                    <i className="fa fa-star-o"></i>
                </li>)

            }
            return result
        }
    }


    onAddToCart = (product) => {

        this.props.onAddToCart(product)
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCES)
    }
}


export default Product;
