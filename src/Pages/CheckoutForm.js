import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({items}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {price} = items;

    useEffect( ()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price : price})
        })
        .then(res => res.json())
        .then(data =>{
            if(data?.clientSecret){
                setClientSecret(data?.clientSecret)
            }
        })
    },[price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardError(error?.message || '')
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-error btn-sm px-6 my-8 font-bold text-white' disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-500 text-center font-bold'>{cardError}</p>
    }
        </>
    );
};

export default CheckoutForm;