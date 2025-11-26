import express from "express";
import { placeOrder,allOrders, placeOrderStripe, placeOrderRazorpay, updateStatus,userOrders, verfiyStripe, varifyRazoryPay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();

//admin features

orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

//Payment Features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/stripe',authUser, placeOrderStripe)
orderRouter.post('/razorpay',authUser, placeOrderRazorpay)

// User Feature

orderRouter.post('/userorders',authUser, userOrders)

// verify payment
orderRouter.post('/verifyStripe',authUser,verfiyStripe)
// verfiy razorpay
orderRouter.post('/verifyRazorPay',authUser,varifyRazoryPay)

export default orderRouter