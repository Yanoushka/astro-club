import { FormControl, FormLabel } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import React from "react";

interface RequiredDatePickerProps {
  label?: string;
  value: Dayjs | null;
  onChange: (newDate: Dayjs | null) => void;
  required?: boolean;
  error?: boolean;
}

const RequiredDatePicker: React.FC<RequiredDatePickerProps> = ({
  label = "Select a date",
  value,
  onChange,
  required = false,
}) => {
  const [error, setError] = React.useState<string>("");

  const validateDate = (newDate: Dayjs | null) => {
    if (required && !newDate) {
      setError(`${label} is required.`);
    } else {
      setError("");
    }
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    validateDate(newDate);
    onChange(newDate);
  };

  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormLabel>{label}</FormLabel>
        <DatePicker
          slotProps={{
            textField: {
              inputProps: { readOnly: true },
              error: !!error,
              helperText: error ? "Date is required" : "",
              sx: {
                "> .MuiInputBase-root": {
                  height: 40,
                },
              },
            },
          }}
          disableFuture
          value={value}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default RequiredDatePicker;
