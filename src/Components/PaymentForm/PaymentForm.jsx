import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button"
import { PaymentFormContainer, FormContainer } from "./PaymentFormStyles"

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements ) return;

        
    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement />
            </FormContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
        </PaymentFormContainer>
    )
}

export default PaymentForm