import React ,{useEffect} from 'react';
import { toast } from 'react-toastify';
import axios from "axios";


// import {useNavigate} from 'react-router-dom';

export const ShopContext = React.createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const deliveryCharge = 5.99;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = React.useState('');
    const [showSearch, setShowSearch] = React.useState(false);
    const [cartItems, setCartItems] = React.useState({});
    const [products, setProducts] = React.useState([]);
    const [token, setToken] = React.useState("");
   
    
    
    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Please select a size before adding to cart');
            return;
        }
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { };
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        if(token) {
            try {
                await axios.post(backendUrl + '/api/cart/add',{itemId, size}, {headers: {token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
    }
     

    const getCartCount = () => {
        let totalCount = 0 ;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                
                await axios.post(backendUrl + '/api/cart/update', {itemId,size,quantity}, { headers: {token}})

            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0 ;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item] > 0) {
                        const productData = products.find((product) => product._id === items);
                        totalAmount += cartItems[items][item] * productData.price;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    }


    const getProductData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            }else {
                toast.error(response.data.message)
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getProductData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem("token")) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    },[token])



    const value = {
        products,
        currency,
        deliveryCharge,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        updateQuantity,
        getCartCount,
        getCartAmount,
        backendUrl,
        token,setToken,

        // navigate
    };

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;