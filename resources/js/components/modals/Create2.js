import React, { Component } from 'react'
import Form from './HookForm';

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                name: '',
                reference: '',
                price: '',
                weight: '',
                category: '',
                stock: '',
                creation_date: '',
                last_sale_date: '',
                description: ''
            },
        }

    }

    createProduct = (e) => {
        e.preventDefault();
        this.props.handleEvent('create', this.state.product);
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            product: {
                ...prevState.product,
                [name]: value
            }
        }))
    }

    render() {
        return (
            <div className="modal-dialog" role="document">
                <Form />
            </div>
        );
    }
}
