import React, { Component } from 'react'
import Products from './Products'
import axios from 'axios';
import Create from './modals/Create';
import Update from "./modals/Update";
import Delete from "./modals/Delete";
import Show from "./modals/Show";


export default class Container extends Component {
                   constructor(props) {
                       super(props);
                       this.state = {
                           products: [],
                           product:{}
                       };
                   }

                   componentDidMount = () => {
                       axios
                           .get("http://mytest.test/products")
                           .then(res => {
                               console.log(res.data.data);
                               this.setState({ products: res.data.data });
                           })
                           .catch(err => {
                               console.log(err);
                           });
                   };

                   showProduct = id => {
                       axios
                           .get("http://mytest.test/products/" + id)
                           .then(res => {
                               this.sendToShow(res.data.data);
                           })
                           .catch(err => {
                               console.log(err);
                           });
                   };
                   updateProduct = product => {
                       axios
                           .put("http://mytest.test/products/" + product.id, {
                               name: product.name,
                               reference: product.reference,
                               price: product.price,
                               weight: product.weight,
                               category: product.category,
                               stock: product.stock,
                               creation_date: product.creation_date,
                               last_sale_date: product.last_sale_date,
                               description: product.description
                           })
                           .then(res => {
                                this.setState(state => {
                                    const products = state.products.map((product)=>{
                                        if (product.id === res.data.data.id) {
                                            res.data.data
                                            return res.data.data;
                                        }else {
                                            return product;
                                        }
                                    })
                                    return {products};
                                });
                               $('#exampleModal2').modal('hide')
                           })
                           .catch(err => {
                               console.log(err);
                           });
                   };

                   deleteProduct = id => {
                       axios
                           .delete("http://mytest.test/products/" + id)
                           .then(res => {
                                this.setState(state => {
                                    const products = state.products.filter(
                                        (item) => res.data.data.id !== item.id
                                    );
                                    return {products};
                                });
                               $('#exampleModal3').modal('hide')
                           })
                           .catch(err => {
                               console.log(err.data);
                           });
                   };

                   createProduct = product => {
                       axios
                           .post("http://mytest.test/products", {
                               name: product.name,
                               reference: product.reference,
                               price: product.price,
                               weight: product.weight,
                               category: product.category,
                               stock: product.stock,
                               creation_date: product.creation_date,
                               last_sale_date: product.last_sale_date,
                               description: product.description
                           })
                           .then(res => {
                               this.setState(state => {
                                   const products = state.products.concat(
                                       res.data.data
                                   );
                                   return {
                                       products
                                   };
                               });
                               $('#exampleModal').modal('hide')
                           })
                           .catch(err => {
                               console.log(err.data);
                           });
                   };

                   myCallback = (product, show) => {
                      this.setState({product:product});
                       if (show) this.showProduct(product);
                   };

                   handleEvent = (method, product) => {
                        if (method === 'create') {
                           this.createProduct(product);
                        }
                        if (method === 'update') {
                            this.updateProduct(product);
                        }
                        if(method==='delete'){
                            this.deleteProduct(this.state.product.id);
                        }
                   }

                   render() {
                       return (
                           <div>
                               <div
                                   className="container full-height"
                                   id="products"
                               >
                                   <div className="row">
                                       <h1 className="title" id="main-title">
                                           Laravel-React Crud
                                       </h1>
                                   </div>
                                   <div className="row">
                                       <div className="container-fluid ">
                                           <button
                                               type="button"
                                               className="btn btn-primary ml-4 mt-2 mb-3"
                                               data-toggle="modal"
                                               data-target="#exampleModal"
                                           >
                                               Crear producto
                                           </button>
                                       </div>
                                   </div>
                                   <div className="row justify-content-center">
                                       <div className="col-12 mt-2">
                                           <div className="container-fluid">
                                               <div className="">
                                                   <Products
                                                       products={
                                                           this.state.products
                                                       }
                                                       callbackFromContainer={
                                                           this.myCallback
                                                       }
                                                   />
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div
                                   className="modal fade"
                                   id="exampleModal"
                                   tabIndex="-1"
                                   role="dialog"
                                   aria-labelledby="exampleModalLabel"
                                   aria-hidden="true"
                               >
                                   <Create handleEvent={this.handleEvent}/>
                               </div>
                               <div
                                   className="modal fade"
                                   id="exampleModal1"
                                   tabIndex="-1"
                                   role="dialog"
                                   aria-labelledby="exampleModalLabel1"
                                   aria-hidden="true"
                               >
                                   <Show product={this.state.product}/>
                               </div>
                               <div
                                   className="modal fade"
                                   id="exampleModal2"
                                   tabIndex="-1"
                                   role="dialog"
                                   aria-labelledby="exampleModalLabel2"
                                   aria-hidden="true"
                               >
                                   <Update handleEvent={this.handleEvent} product={this.state.product}/>
                               </div>
                               <div
                                   className="modal fade"
                                   id="exampleModal3"
                                   tabIndex="-1"
                                   role="dialog"
                                   aria-labelledby="exampleModalLabel3"
                                   aria-hidden="true"
                               >
                                   <Delete handleEvent={this.handleEvent} />
                               </div>
                           </div>
                       );
                   }
               }
