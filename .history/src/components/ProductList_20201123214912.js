import React, { Component, Fragment } from 'react';
import Product from './Product';


export default class ProductList extends Component {
    
    state = {
        products: []
    }

    render() {
        return (
            <>

                <Product />
                
            </>
        )
    }
}
