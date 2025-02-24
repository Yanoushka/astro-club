import { useAstrologyStore } from "@/lib/store";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import React from "react";

export default function AstroResume() {
  const astroState = useAstrologyStore.getState();
  const astroData = astroState.getUserData();
  const [isPaid, setIsPaid] = React.useState(true);
  const handlePayment = () => {
    // paiement stripe ici
  };
  console.log("astroData: ", astroData);
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
          <Button onClick={handlePayment}>See more for only 9.90 euros</Button>
        </Box>
        {isPaid && (
          <Box sx={{ height: "80px", background: "green", color: "white" }}>
            ✅ Thanks for your surscribe and good luck !
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button>Next</Button>
      </CardActions>
    </Card>
  );
}
