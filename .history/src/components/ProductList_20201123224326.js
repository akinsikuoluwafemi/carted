import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title fr


export default class ProductList extends Component {
    
    state = {
        products: []
    }

    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <div className="row">

                        </div>
                    </div>
                </div>

                <Product />
                
            </>
        )
    }
}
