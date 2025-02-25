"use client";

import PaymentModal from "@/app/components/shared/stripemodal";
import { useAstrologyStore } from "@/lib/store";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
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

  return (
    <Card sx={{ minWidth: 400, minHeight: 350 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <h1>Your Cosmic Reading</h1>
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Based on your unique celestial alignment :
        </Typography>
        <Typography>
          Reading based on birth details:
          {new Date(astroData.birthDate!).getHours().toLocaleString()} at{" "}
          {astroData.birthTime} in {astroData.birthLocation}
        </Typography>
        <Typography>Your interest {astroData.astroInterest}</Typography>
        <Box sx={{ height: "80px" }}>
          See more for only 9.90$
          <PaymentModal onPaymentSuccess={handlePaymentSuccess} />
        </Box>
        {paymentSuccess && (
          <Box sx={{ height: "80px", background: "green", color: "white" }}>
            ✅ Thanks for your surscribe and good luck !
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Link href="/">
          <Button>Finished</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
