import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import {ProductConsumer}




export default class ProductList extends Component {
    
    state = {
        products: storeProducts
    }

    render() {
        console.log(this.state.products)
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