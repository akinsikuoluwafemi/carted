import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';



const ProductContext = React.createContext();



class ProductProvider extends Component {
    state = {
        pro
    }

    render() {
        return (
            <ProductContext.Provider value={{

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };
