"use client";

import CustomSelect from "@/app/components/shared/select";
import CustomTimePicker from "@/app/components/shared/timepicker";
import { useAstrologyStore } from "@/lib/store";
import { Box, Card, CardActions, CardContent } from "@mui/joy";
import { Button, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AstroDetails() {
  const router = useRouter();
  const setUserData = useAstrologyStore((state) => state.setUserData);
  const [selectedTime, setSelectedTime] = React.useState<Dayjs | null>(null);
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
        birthTime: selectedTime ? selectedTime.toISOString() : null,
        astroInterest: selectedInterest,
      });
      router.push("/onboarding/resume");
    }
  };

  const onTimeChange = (newTime: Dayjs | null) => {
    setSelectedTime(newTime);
    if (newTime) setErrors((prev) => ({ ...prev, birthTime: false }));
  };

  const onInterestChange = (newInterest: string | null) => {
    setSelectedInterest(newInterest || "");
    setErrors((prev) => ({
      ...prev,
      astroInterest: newInterest ? false : true,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      <Card
        sx={{
          width: { xs: "90%" },
          maxHeight: "80vh",
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
            sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
          >
            Go Deeper!
          </Typography>
          <Typography
            sx={{ color: "text.secondary", mb: 3, textAlign: "center" }}
          >
            Let's keep going with the deep details of your astrological profile.
          </Typography>

          <Box sx={{ marginBottom: "20px", height: 100 }}>
            <CustomTimePicker
              label="Birth Time"
              onChange={onTimeChange}
              error={errors.birthTime}
            />
          </Box>

          <Box sx={{ marginBottom: "20px", height: 80 }}>
            <CustomSelect
              label="Select an Interest"
              options={interests}
              onChange={onInterestChange}
              error={errors.astroInterest}
              helperText={errors.astroInterest ? "Please add an interest" : ""}
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
              "&:hover": {
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
