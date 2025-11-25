import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD Method

const placeOrder = async (req, res) => {
    
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = await orderModel.create(orderData);


        await userModel.findByIdAndUpdate(userId, {cartData: {}})
        res.json({success: true, message: 'Order Placed'})

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message: error.message
        })
        
    }
}

// Placing Order using Stripe Methosd


 const placeOrderStripe = async (req, res) => {

}

// Placing orders using COD Method

const placeOrderRazorpay = async (req, res) => {

}

// All Orders data for Admin Panel

const allOrders = async (req, res) => {
    
    try {
       const orders = await orderModel.find({})
       res.json({success: true, orders})
    } catch (error) {
        console.log(error);
        res.json({
            success: true,
            message: error.message
        })
        
    }

}

// User Order Data For Admin Panel

const userOrders = async (req,res) => {

    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success: true, orders})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }

}

// update order status

const updateStatus = async (req, res) =>{

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, updateStatus,userOrders , allOrders}