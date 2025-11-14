import React from 'react';
import { products } from '../assets/assets';

export const ShopContext = React.createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const deliveryCharge = 5.99;
    const [search, setSearch] = React.useState('');
    const [showSearch, setShowSearch] = React.useState(false);

    const value = {
        products,
        currency,
        deliveryCharge,
        search,
        setSearch,
        showSearch,
        setShowSearch
    };

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;