import React, { Component } from 'react';
import {storeProducts, detailP}


const ProductContext = React.createContext();



class ProductProvider extends Component {
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
