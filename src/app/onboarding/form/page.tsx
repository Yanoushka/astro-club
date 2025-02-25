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
          width: { xs: "90%" },
          minHeight: 400,
          minWidth: 300,
          p: 3,
          borderRadius: "16px",
          boxShadow: "lg",
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#333",
              mb: 1,
            }}
          >
            ✨ Your Cosmic Origins! ✨
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              mb: 3,
            }}
          >
            Let's start with the basics of your astrological profile.
          </Typography>

          <Box sx={{ mb: 2, height: 80 }}>
            <Calendar
              onChange={onDateChange}
              required={true}
              error={errors.birthDate}
            />
          </Box>

          <Box sx={{ mb: 2, height: 80 }}>
            <InputCustom
              label="Place of Birth"
              placeholder="Enter your birth city"
              required={true}
              onChange={onCityChange}
              error={errors.birthLocation}
              helperText={errors.birthLocation ? "City is required" : ""}
            />
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#556cd6",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#334ac1" },
            }}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
