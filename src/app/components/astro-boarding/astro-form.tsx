import { useAstrologyStore } from "@/lib/store";
import { Box } from "@mui/joy";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";
import Calendar from "../shared/calendar";
import InputCustom from "../shared/input";

export default function AstroForm() {
  const [placeOfBirth, setPlaceOfBirth] = React.useState(""); // État pour la ville
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null); // État pour la date
  const [dateError, setDateError] = React.useState(false); // État d'erreur pour la date
  const [cityError, setCityError] = React.useState(false); // État d'erreur pour la ville
  const setUserData = useAstrologyStore((state) => state.setUserData);
  const router = useRouter(); // Utiliser useRouter

  const onDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
    setDateError(dateError); // Supprime l'erreur si une date est sélectionnée
  };

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceOfBirth(e.target.value);
    setCityError(e.target.value.trim() === ""); // Supprime l'erreur si une ville est saisie
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!selectedDate) {
      console.log("selectedDate: ", selectedDate);

      setDateError(true);
      isValid = false;
    }

    if (!placeOfBirth.trim()) {
      setCityError(true);
      isValid = false;
    }

    if (isValid) {
      console.log("Submitted:", { placeOfBirth, selectedDate });
      setUserData({
        birthLocation: placeOfBirth,
        birthDate: selectedDate?.toISOString(),
      });
      router.push("/onboarding/details");
    }
  };

  return (
    <Card sx={{ minWidth: 400, minHeight: 350 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <h1>Your Cosmic Origins !</h1>
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Let's start with the basics of your astrological profile
        </Typography>

        <Box sx={{ height: "80px" }}>
          <Calendar onChange={onDateChange} required={true} error={dateError} />
        </Box>

        <Box sx={{ height: "80px" }}>
          <InputCustom
            label="Place of birth"
            placeholder="New York"
            required={true}
            onChange={onCityChange}
            error={cityError}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleSubmit}>
          Next
        </Button>
      </CardActions>
    </Card>
  );
}
