import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';



const ProductContext = React.createContext();



class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct
    }
    render() {
        return (
            <ProductContext.Provider value={{
                products: this.state
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };
