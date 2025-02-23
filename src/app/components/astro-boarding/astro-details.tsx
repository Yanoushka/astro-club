import { Button, Card, CardActions, CardContent, Typography } from "@mui/joy";

export default function AstroDetails() {
  return (
    <Card sx={{ minWidth: 300, minHeight: 300 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        <h1>Go deeper !</h1>
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        Let's keep going with the deep details of your astrological profile
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="small">
        Next
      </Button>
    </CardActions>
  </Card>
  );
}
