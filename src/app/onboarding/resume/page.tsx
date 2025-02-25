"use client";

import PaymentModal from "@/app/components/shared/stripemodal";
import { useAstrologyStore } from "@/lib/store";
import { Box, Card, CardActions, CardContent } from "@mui/joy";
import { Button, Typography } from "@mui/material";
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

  const generateAstroSummary = () => {
    return `
    Based on your birth date of ${new Date(astroData.birthDate!).toLocaleDateString("fr-FR", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}, your birth time of ${formatBirthTime(astroData.birthTime)},
    and your location of ${astroData.birthLocation}, 
    we have crafted a unique astrological reading that reflects your personality traits and potential paths. 
    Your interest in ${astroData.astroInterest} suggests that you may find yourself drawn to exploring deeper insights into your cosmic influences.`;
  };

  const formatBirthTime = (isoString) => {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    return date.toLocaleTimeString("fr-FR", {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: "400px" },
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "center",
              color: "#3f51b5",
            }}
          >
            Your Cosmic Reading
          </Typography>
          <Typography
            sx={{ color: "text.secondary", mb: 2, textAlign: "center" }}
          >
            Based on your unique celestial alignment:
          </Typography>

          <Box sx={{ marginBottom: "16px" }}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              Birth Details
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Date: {new Date(astroData.birthDate!).toLocaleDateString("fr-FR", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Time: {formatBirthTime(astroData.birthTime)}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Location: {astroData.birthLocation}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "16px" }}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              Your Interest
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {astroData.astroInterest}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "16px", textAlign: "center" }}>
            <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
              Summary
            </Typography>
            <Typography>{generateAstroSummary()}</Typography>
          </Box>

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
