import { loadStripe, Stripe} from '@stripe/stripe-js';

let striptPromise : Promise<Stripe|null>;

const getStripePromise = () => {
    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
    if(!striptPromise && !!stripeKey) {
       striptPromise = loadStripe(stripeKey)
    }
    return striptPromise;
}

export default getStripePromise

