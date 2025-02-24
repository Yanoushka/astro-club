import React, { useState } from "react";
import { FormHelperText, FormLabel } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

interface CustomTimePickerProps {
  label: string;
  value?: Dayjs | null;
  onChange?: (newTime: Dayjs | null) => void;
  required?: boolean;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  label = "Select a time",
  value,
  onChange,
  required = false,
}) => {
  const [error, setError] = useState<string>("");

  const handleBlur = () => {
    if (required && !value) {
      setError(`${label} est requis.`);
    } else {
      setError("");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormLabel>{label}</FormLabel>
      <TimePicker
        ampm={false} // Utiliser le format 24h (HH:mm)
        value={value}
        onChange={onChange}
        onClose={handleBlur} // Vérifie la validation lors de la fermeture
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
