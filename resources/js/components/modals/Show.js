import React, { Component } from 'react'

export default class Show extends Component {
     constructor(props){
        super(props)
        this.state = {
             product: {
                 name: '',
                 reference: null,
                 price: null,
                 weight: null,
                 category: '',
                 stock: '',
                 creation_date: '',
                 last_sale_date: '',
                 description: ''
             }
         }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ product: nextProps.product })
    }


    render() {
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.product.name}</p>
                        <p>{this.props.product.reference}</p>
                        <p>{this.props.product.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
