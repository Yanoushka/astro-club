import { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/joy";

// public key need to be put in env
const stripePromise = loadStripe("pk_test_51QwAjiQIr5sCMzToswbDwv07A3FfnkYUAjKBMcsizERJxNHy1YSzFTxOfyVeqsuoDg0j6fzfMutVJHVAMqFGh9j400O455HwxO");

interface PaymentPageProps {
  onClose: () => void;
  onPaymentSuccess: (success: boolean) => void;
}

const StripePayment: React.FC<PaymentPageProps> = ({ onClose, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setMessage("Stripe n'est pas chargé.");
      setLoading(false);
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

    if (error) {
      setMessage(error.message || "Erreur de paiement.");
      onPaymentSuccess(false);
    } else {
      setMessage(`✅ Paiement réussi ! ID: ${paymentMethod.id}`);
      onPaymentSuccess(true);
    }

    setLoading(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#000",
        fontSize: "16px",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        '::placeholder': {
          color: '#cfd7df',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography sx={{ fontWeight: "bold", mb: 2 }}>
        Test payment
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <Box
          sx={{
            marginLeft: "-55px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            transition: "border-color 0.3s",
            height: "40px",
            width: "395px",
            '&:focus-within': {
              borderColor: "#6B73FF",
            },
          }}
        >
          <CardElement options={cardElementOptions}/>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || !stripe}
            sx={{
              backgroundColor: "#6B73FF",
              '&:hover': {
                backgroundColor: "#556cd6",
              },
              color: "white",
              borderRadius: "8px",
              padding: "10px 20px",
              fontWeight: "bold",
            }}
          >
            {loading ? "Processing..." : "Payer"}
          </Button>
          <Button
            onClick={onClose}
            variant="outlined"
            color="secondary"
            sx={{ ml: 2, borderRadius: "8px" }}
          >
            Close
          </Button>
        </Box>
      </form>
      {message && (
        <Typography sx={{ color: "green", mt: 2 }}>{message}</Typography>
      )}
    </Box>
  );
};

export default function PaymentPage({ onClose, onPaymentSuccess }: PaymentPageProps) {
  return (
    <Elements stripe={stripePromise}>
      <StripePayment onClose={onClose} onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  );
}
