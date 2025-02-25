import { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Box, Button, Typography } from "@mui/material";

// need to be put in env
const stripePromise = loadStripe(
  "pk_test_51QwAjiQIr5sCMzToswbDwv07A3FfnkYUAjKBMcsizERJxNHy1YSzFTxOfyVeqsuoDg0j6fzfMutVJHVAMqFGh9j400O455HwxO"
);

interface PaymentPageProps {
  onClose: () => void;
  onPaymentSuccess: (success: boolean) => void;
}

const StripePayment: React.FC<PaymentPageProps> = ({
  onClose,
  onPaymentSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setMessage("Stripe not loaded.");
      setLoading(false);
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)!,
    });

    if (error) {
      setMessage(error.message || "Payment error.");
      onPaymentSuccess(false);
    } else {
      setMessage(`✅ Payment done ! ID: ${paymentMethod.id}`);
      onPaymentSuccess(true);
    }

    setLoading(false);
  };

  const inputStyle = {
    style: {
      base: {
        color: "#333",
        fontSize: "16px",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <Box sx={{ textAlign: "center", p: 3, maxWidth: "400px", margin: "auto" }}>
      <Typography sx={{ fontWeight: "bold", mb: 2 }}>Test Payment</Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 1, textAlign: "left" }}>
            Card number
          </Typography>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              transition: "border-color 0.3s",
              "&:focus-within": { borderColor: "#6B73FF" },
            }}
          >
            <CardNumberElement options={inputStyle} />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 1, textAlign: "left" }}>
              Expiration
            </Typography>
            <Box
              sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                transition: "border-color 0.3s",
                "&:focus-within": { borderColor: "#6B73FF" },
              }}
            >
              <CardExpiryElement options={inputStyle} />
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" sx={{ mb: 1, textAlign: "left" }}>
              CVC
            </Typography>
            <Box
              sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                transition: "border-color 0.3s",
                "&:focus-within": { borderColor: "#6B73FF" },
              }}
            >
              <CardCvcElement options={inputStyle} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || !stripe}
            sx={{
              backgroundColor: "#6B73FF",
              "&:hover": { backgroundColor: "#556cd6" },
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

export default function PaymentPage({
  onClose,
  onPaymentSuccess,
}: PaymentPageProps) {
  return (
    <Elements stripe={stripePromise}>
      <StripePayment onClose={onClose} onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  );
}
