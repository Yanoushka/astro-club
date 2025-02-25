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
      <Button onClick={() => setOpen(true)}>Payer</Button>

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
          }}
        >
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Numéro : 4242 4242 4242 4242 Date : 12/34 CVC : 123
          </Typography>
          {paymentSuccess ? (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "green" }}
            >
              ✅ Payment done, thanks ! 🎉
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
