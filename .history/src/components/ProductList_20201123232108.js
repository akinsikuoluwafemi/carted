import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../'



export default class ProductList extends Component {
    
    state = {
        products: []
    }

    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">

                        </div>
                    </div>
                </div>

                {/* <Product /> */}
                
            </>
        )
    }
}
