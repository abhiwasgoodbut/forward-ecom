import express from "express";
import { placeOrder,allOrders, placeOrderStripe, placeOrderRazorpay, updateStatus,userOrders} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();

//admin features

orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, allOrders)

//Payment Features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

// User Feature

orderRouter.post('/userorders',authUser, userOrders)

export default orderRouter