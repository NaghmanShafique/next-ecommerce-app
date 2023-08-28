import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key ,  {
    apiVersion : "2022-11-15"
})

export async function POST (request:NextRequest) {
   
    const body = await request.json();

    console.log("Request body2",body);

    try {

          if (body.length > 0 ) {
              // Create Checkout Sessions from body params.
              const session = await stripe.checkout.sessions.create({
            //   line_items: [
            //   {
            //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                
            //     price: '{{PRICE_ID}}',
            //     quantity: 1,
            //   },
            // ],
            submit_type : 'pay',
            mode: 'payment',
            payment_method_types : ["card"],
            billing_address_collection : 'auto',
            shipping_options : [{shipping_rate : 'shr_1Nfq60IOZZ5b3Vo8NFL4uLT3'},
                                {shipping_rate : 'shr_1Nfq2vIOZZ5b3Vo8dHJFyRD5'}
                               ],
            line_items : body.map((item:any)=>{
              return {
                price_data : {
                     currency: 'pkr',
                     product_data : {
                        name : item.name,
                     },
                     unit_amount : item.price * 100,     
                },
                 
                quantity : item.qty
              }
            }),
                             
            success_url: `${request.headers.get("origin")}/?success=true`,
            cancel_url: `${request.headers.get("origin")}/?canceled=true`,
          });
          return NextResponse.json({session})
          // request.redirect(303, session.url);      
          } else {
            return NextResponse.json({message: "No Data Found."})
          }
        
      } catch (err:any) {
        console.log("Stripe Error",err)
        return NextResponse.json(err.message)
        // request.status(err.statusCode || 500).json(err.message);
      }
  
}