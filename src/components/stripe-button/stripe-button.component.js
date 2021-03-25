import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // porque stripe requiere en centavos
  const publishableKey = 'pk_test_51IYB0zCuY7diwXaElSWuh4J4wu0TkxZJf3QKWUTVRb6mJvDYXoyn3cBzpArpvDxERna67MQQkT2lQzgVpOCXuHOe00zXivRexY';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;