"use client";

import CustomSelect from "@/app/components/shared/select";
import CustomTimePicker from "@/app/components/shared/timepicker";
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
import React, { useEffect } from "react";

export default function AstroDetails() {
  const router = useRouter();
  const setUserData = useAstrologyStore((state) => state.setUserData);
  const [selectedTime, setSelectedTime] = React.useState<Date | null>(null);
  const [selectedInterest, setSelectedInterest] = React.useState("");
  const [errors, setErrors] = React.useState({
    birthTime: false,
    astroInterest: false,
  });

  const { userData } = useAstrologyStore();

  useEffect(() => {
    if (!userData.birthDate || !userData.birthLocation) {
      router.replace("/onboarding/form");
    }
  }, [userData, router]);

  const interests = [
    { value: "career", label: "Career & Ambitions" },
    { value: "love", label: "Love & Relationships" },
    { value: "health", label: "Health & Wellness" },
    { value: "wealth", label: "Wealth & Abundance" },
    { value: "spiritual", label: "Spiritual Growth" },
  ];

  const handleSubmit = () => {
    let isValid = true;
    let newErrors = { birthTime: false, astroInterest: false };
    if (!selectedTime) {
      newErrors.birthTime = true;
      isValid = false;
    }
    if (!selectedInterest.trim()) {
      newErrors.astroInterest = true;
      isValid = false;
    }
    setErrors(newErrors);

    if (isValid) {
      setUserData({
        birthTime: selectedTime?.toISOString(),
        astroInterest: selectedInterest,
      });
      router.push("/onboarding/resume");
    }
  };

  const onTimeChange = (newTime: Date | null) => {
    setSelectedTime(newTime);
    if (newTime) setErrors((prev) => ({ ...prev, birthTime: false }));
  };

  const onInterestChange = (newInterest: string) => {
    setSelectedInterest(newInterest);
    if (newInterest) setErrors((prev) => ({ ...prev, astroInterest: false }));
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
          minHeight: 300,
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
            sx={{ fontWeight: 'bold', mb: 2, textAlign: "center" }}
          >
            Go Deeper!
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3, textAlign: "center" }}>
            Let's keep going with the deep details of your astrological profile.
          </Typography>

          <Box sx={{ marginBottom: "20px", height: 100 }}>
            <CustomTimePicker
              label="Birth Time"
              onChange={onTimeChange}
              error={errors.birthTime}
              sx={{
                borderRadius: "8px",
                border: errors.birthTime ? "1px solid red" : "1px solid #ccc",
                transition: "border 0.3s ease",
                width: "100%",
              }}
            />
          </Box>
          
          <Box sx={{ marginBottom: "20px", height: 80 }}>
            <CustomSelect
              label="Select an Interest"
              options={interests}
              onChange={onInterestChange}
              error={errors.astroInterest}
              helperText={errors.astroInterest ? "Please add an interest" : ""}
              sx={{
                borderRadius: "8px",
                border: errors.astroInterest ? "1px solid red" : "1px solid #ccc",
                transition: "border 0.3s ease",
                width: "100%",
              }}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: "#6B73FF",
              color: "white",
              borderRadius: "8px",
              width: "100%",
              '&:hover': {
                backgroundColor: "#556cd6",
              },
            }}
          >
            Next
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
