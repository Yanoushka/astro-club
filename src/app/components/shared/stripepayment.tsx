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

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography>Paiement Test</Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <CardElement />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading || !stripe}
          >
            {loading ? "Processing..." : "Payer"}
          </Button>
          <Button
            onClick={onClose}
            variant="outlined"
            color="secondary"
            sx={{ ml: 2 }}
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
