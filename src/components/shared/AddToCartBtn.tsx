"use client"
import React from 'react'
import { json } from 'stream/consumers';
import getStripePromise from '@/lib/stripe';

const handleStripeCheckOut = async () => {
//    console.log("Add To Cart Function",getStripePromise)

   const stripe = await getStripePromise();
   const products = [
    {
        id : 1,
        name : "Stripe Product1",
        price : 200.00,
        qty   : 3,

    }
   ]
   const result = await fetch("http://localhost:3000/api/stripeSession" ,{
    method : "POST",
    headers : {"Content-type": "application/json"},
    cache : "no-cache",
    body : JSON.stringify(products)
   })
//    console.log("Stripe Result",result);
    const data = await result.json();
    if(data.session) {
        stripe?.redirectToCheckout({sessionId : data.session.id})
    }
}
const AddToCartBtn = () => {
    return (
        <div>
            <button  onClick={handleStripeCheckOut} className='bg-black text-white py-2 w-32 rounded-md mb-4'>Add To Cart</button>
        </div>
    )
}

export default AddToCartBtn