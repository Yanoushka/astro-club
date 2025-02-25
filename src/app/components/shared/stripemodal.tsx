import { useState } from "react";
import PaymentPage from "./stripepayment";
import { Box, Button, Modal, Typography } from "@mui/joy";

interface PaymentModalProps {
  onPaymentSuccess: (success: boolean) => void;
}

export default function PaymentModal({ onPaymentSuccess }: PaymentModalProps) {
  const [open, setOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = (success: boolean) => {
    setPaymentSuccess(success);
    onPaymentSuccess(success);
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        sx={{
          backgroundColor: "#6B73FF",
          color: "white",
          "&:hover": {
            backgroundColor: "#556cd6",
          },
          borderRadius: "8px",
          padding: "10px 20px",
          fontWeight: "bold",
        }}
      >
        Payer
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            border: "1px solid #ddd",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Détails de paiement
          </Typography>
          <Typography sx={{ color: "text.secondary", marginBottom: 2 }}>
            Numéro : 4242 4242 4242 4242 <br />
            Date : 12/34 <br />
            CVC : 123
          </Typography>
          {paymentSuccess ? (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "green", marginTop: 2 }}
            >
              ✅ Paiement effectué avec succès, merci ! 🎉
            </Typography>
          ) : (
            <PaymentPage
              onClose={() => setOpen(false)}
              onPaymentSuccess={handlePaymentSuccess}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
