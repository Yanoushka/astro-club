import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/joy";
import CustomTimePicker from "../shared/timepicker";
import AstroInterest from "./astro-interest";

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
        <CustomTimePicker label="Birth time" />

        {/* <AstroInterest /> */}
      </CardContent>
      <CardActions>
        <Link href="/onboarding/form">
          <Button>Back</Button>
        </Link>
        <Button>Next</Button>
      </CardActions>
    </Card>
  );
}
