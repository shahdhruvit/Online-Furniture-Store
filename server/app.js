const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51P5BD2SEwQjDkDy2ExiijTgLTVcPJk8PDB3Et4MYLwGGIg6WuMz4clgzXkWSdcY9dDgD8g9f37fT58V3hhEooAoR00QvA7L4wB")

app.use(express.json());
app.use(cors());

//checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const products = req.body;

    
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"$",
            product_data:{
                name:product.productName
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/home",
        cancel_url:"http://localhost:3000/cancel",
    })
   res.json({id:session.id})
})

app.listen(7000,()=>{
    console.log("server start")
})