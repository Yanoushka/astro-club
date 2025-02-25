"use client";

import Calendar from "@/app/components/shared/calendar";
import InputCustom from "@/app/components/shared/input";
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
import * as React from "react";

export default function AstroForm() {
  const [placeOfBirth, setPlaceOfBirth] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [errors, setErrors] = React.useState({
    birthDate: false,
    birthLocation: false,
  });
  const router = useRouter();
  const setUserData = useAstrologyStore((state) => state.setUserData);

  const onDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
    if (newDate) setErrors((prev) => ({ ...prev, birthDate: false }));
  };

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlaceOfBirth(value);
    if (value.trim()) setErrors((prev) => ({ ...prev, birthLocation: false }));
  };

  const handleSubmit = () => {
    let isValid = true;
    let newErrors = { birthDate: false, birthLocation: false };
    if (!selectedDate) {
      newErrors.birthDate = true;
      isValid = false;
    }
    if (!placeOfBirth.trim()) {
      newErrors.birthLocation = true;
      isValid = false;
    }
    setErrors(newErrors);

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
    <Card sx={{ minWidth: 500, minHeight: 350 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <h1>Your Cosmic Origins!</h1>
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Let's start with the basics of your astrological profile
        </Typography>

        <Box sx={{ height: "80px" }}>
          <Calendar
            onChange={onDateChange}
            required={true}
            error={errors.birthDate}
          />
        </Box>

        <Box sx={{ height: "80px" }}>
          <InputCustom
            label="Place of birth"
            placeholder="New York"
            required={true}
            onChange={onCityChange}
            error={errors.birthLocation}
            helperText="City is required"
          />
        </Box>
      </CardContent>

      <CardActions>
        <Link onClick={handleSubmit}>
          <Button>Next</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
