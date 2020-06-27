import React, { Component } from 'react'

export default class Product extends Component {
                   constructor(props) {
                       super(props);
                   }

                   getStyle = () => {
                       return {
                           backgroundImage:
                               "url(" + this.props.product.img + ")",
                           backgrounReapeat: "no-repeat"
                       };
                   };

                   setProduct = () => {
                       this.props.callbackFromParent(this.props.product);
                   };

                   showProduct = () => {
                       this.props.callbackFromParent(this.props.product, true);
                   }

                   render() {
                       return (
                           <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                               <div
                                   className="product-box flex-center column"
                                   style={this.getStyle()}
                               >
                                   <div className="product-text flex-center column">
                                       <h5>
                                           Hola {this.props.product.reference}
                                       </h5>
                                       <div>{this.props.product.name}</div>
                                   </div>
                                   {/* <i className="fa fa-spinner fa-spin"></i> */}
                                   <div className="icon-set">
                                       <a
                                           href="#"
                                           className="tooltip-test"
                                           title="Mostrar"
                                           data-toggle="modal"
                                           data-target="#exampleModal1"
                                           onClick={this.showProduct}
                                       >
                                           <i className="fa fa-eye"></i>
                                       </a>
                                       <a
                                           href="#"
                                           className="tooltip-test"
                                           title="Editar"
                                           data-toggle="modal"
                                           data-target="#exampleModal2"
                                           onClick={this.setProduct}
                                       >
                                           <i className="fa fa-pencil-square"></i>
                                       </a>
                                       <a
                                           href="#"
                                           className="tooltip-test"
                                           title="Borrar"
                                           data-toggle="modal"
                                           data-target="#exampleModal3"
                                           onClick={this.setProduct}
                                       >
                                           <i className="fa fa-trash"></i>
                                       </a>
                                   </div>
                               </div>
                           </div>
                       );
                   }
               }
