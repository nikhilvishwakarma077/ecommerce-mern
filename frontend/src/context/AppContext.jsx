import { createContext, useEffect, useState } from "react";
import { API } from "../api/auth.api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);


    const fetchAllProducts = async () => {
        try {
            const res = await API.get(
                "/product/products"
            );
            setAllProducts(res.data.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

 

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const value = {
        allProducts,
        fetchAllProducts,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
