import { useAstrologyStore } from "@/lib/store";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/joy";

export default function AstroResume() {
  const astroState = useAstrologyStore.getState();
  const astroData = astroState.getUserData();
  console.log("astroData: ", astroData);
  return (
    <Card sx={{ minWidth: 400, minHeight: 350 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <h1>Here we go!</h1>
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          your astrological profile
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Next</Button>
      </CardActions>
    </Card>
  );
}
