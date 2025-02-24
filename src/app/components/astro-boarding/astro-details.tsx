import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import CustomTimePicker from "../shared/timepicker";
import SelectInterest from "../shared/select";
import { useAstrologyStore } from "@/lib/store";
import React from "react";
import { useRouter } from "next/navigation";

export default function AstroDetails() {
  const router = useRouter();
  const setUserData = useAstrologyStore((state) => state.setUserData);
  const [selectedTime, setSelectedTime] = React.useState<Date | null>(null);
  const [selectedInterest, setSelectedInterest] = React.useState("");
  const [errors, setErrors] = React.useState({
    birthTime: false,
    astroInterest: false,
  });

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
      console.log("push: ");
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
    <Card sx={{ minWidth: 400, minHeight: 350 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <h1>Go deeper !</h1>
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Let's keep going with the deep details of your astrological profile
        </Typography>
        <Box sx={{ height: "80px", marginBottom: "20px" }}>
          <CustomTimePicker
            label="Birth time"
            onChange={onTimeChange}
            error={errors.birthTime}
          />
        </Box>
        <Box sx={{ height: "80px" }}>
          <SelectInterest
            label="Select an interest"
            options={interests}
            onChange={onInterestChange}
            error={errors.astroInterest}
            helperText={errors.astroInterest ? "Please add an interest" : ""}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={handleSubmit}>Next</Button>
      </CardActions>
    </Card>
  );
}
