import { createContext } from "react";
import PRODUCTS from '../ShopData.json'

export const ProductContext = createContext({
    products: []
})

export const ProductProvider = ({ children }) => {
    const products = PRODUCTS
    const value = { products }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}