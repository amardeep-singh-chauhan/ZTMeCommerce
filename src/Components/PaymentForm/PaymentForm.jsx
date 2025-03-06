import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { BUTTON_TYPE_CLASSES } from "../Button/Button"
import { PaymentFormContainer, FormContainer, PaymentButton } from "./PaymentFormStyles"
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../Redux/Cart/CartSelector";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import { useState } from "react";

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [processingPayment, setProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setProcessingPayment(true);

        const response = await fetch('/.netlify/functions/CreatePaymentIntent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        })
            .then((response) => response.json())

        setProcessingPayment(false);

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        })

        if (paymentResult.error) {
            alert('Payment failed:', paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert('Payment succeeded!');
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton isLoading={processingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm