import React, { Component } from 'react'

export default class Delete extends Component {
     constructor(props){
        super(props)
    }

    deleteProduct = () => {
        this.props.handleEvent('delete');
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
                    <div className="modal-body remove-text">
                        <p>¿Estás seguro de borrar el producto?</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.deleteProduct}
                        >
                            Borrar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
