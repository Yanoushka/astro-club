"use client";

import PaymentModal from "@/app/components/shared/stripemodal";
import { useAstrologyStore } from "@/lib/store";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AstroResume() {
  const astroState = useAstrologyStore.getState();
  const astroData = astroState.getUserData();
  const router = useRouter();
  const { userData } = useAstrologyStore();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (
      !userData.birthDate ||
      !userData.birthLocation ||
      !userData.astroInterest ||
      !userData.birthTime
    ) {
      router.replace("/onboarding/form");
    }
  }, [userData, router]);

  const handlePaymentSuccess = (success: boolean) => {
    setPaymentSuccess(success);
    console.log("Paiement réussi :", success);
  };

  const handleFinished = () => {
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: "400px" },
          minHeight: 400,
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
          >
            Your Cosmic Reading
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 2, textAlign: "center" }}>
            Based on your unique celestial alignment:
          </Typography>

          <Typography sx={{ marginBottom: "16px", textAlign: "center" }}>
            Reading based on birth details:{" "}
            {new Date(astroData.birthDate!).getHours().toLocaleString()} at{" "}
            {astroData.birthTime} in {astroData.birthLocation}
          </Typography>

          <Typography sx={{ marginBottom: "16px", textAlign: "center" }}>
            Your interest: {astroData.astroInterest}
          </Typography>

          <Box
            sx={{
              height: "80px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", marginRight: "10px" }}>
              See more for only $9.90
            </Typography>
            <PaymentModal onPaymentSuccess={handlePaymentSuccess} />
          </Box>

          {paymentSuccess && (
            <Box
              sx={{
                height: "40px",
                background: "#4caf50",
                color: "white",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              ✅ Thanks for your subscription! Good luck!
            </Box>
          )}
        </CardContent>
        <CardActions>
          <Button
            onClick={handleFinished}
            variant="contained"
            sx={{
              backgroundColor: "#6B73FF",
              color: "white",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#556cd6",
              },
              width: "100%",
            }}
          >
            Finished
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
