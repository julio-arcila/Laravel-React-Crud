import React, { Component } from 'react'
import Product from './Product'
import propTypes from 'prop-types';


export default class Products extends Component {
                   constructor(props) {
                       super(props);
                   }

                   productsCallback = (product, show) => {
                       this.props.callbackFromContainer(product, show);
                   };

                   render() {
                       return (
                           <div className="row center">
                               {this.props.products.map((product, index) => (
                                   <Product
                                       key={index}
                                       product={product}
                                       callbackFromParent={this.productsCallback}
                                   />
                               ))}
                           </div>
                       );
                   }
               }

/* Products.propTypes = {
    products : propTypes.array.isRequired
} */
