import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';





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
                            {hello => {
                                return <h1></h1>
                            }}
                        </div>
                    </div>
                </div>

                {/* <Product /> */}
                
            </>
        )
    }
}
