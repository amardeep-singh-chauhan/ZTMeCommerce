import { createContext, useEffect } from "react";
import { addCollectionAndDocuments } from "../Utils/Firebase/Firebase.utils.js";

export const ProductContext = createContext({
    products: []
})

export const ProductProvider = ({ children }) => {
    const products = []
    const value = { products }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}