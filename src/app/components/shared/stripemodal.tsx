import { Box, Modal, Typography } from "@mui/joy";
import { Button } from "@mui/material";
import { useState } from "react";
import PaymentPage from "./stripepayment";

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
        Pay
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "400px",
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            border: "1px solid #ddd",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <Typography sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Payment details
          </Typography>
          <Typography sx={{ color: "text.secondary", marginBottom: 2 }}>
            Number : 4242 4242 4242 4242 <br />
            Date : 12/34 <br />
            CVC : 123
          </Typography>
          {paymentSuccess ? (
            <Typography
              sx={{ textAlign: "center", color: "green", marginTop: 2 }}
            >
              ✅ Payment success, thanks! 🎉
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
