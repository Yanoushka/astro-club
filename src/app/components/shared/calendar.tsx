import { FormControl, FormLabel } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import React from "react";

interface CalendarProps {
  label?: string;
  value: Dayjs | null;
  onChange: (newDate: Dayjs | null) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  label = "Select a date",
  value,
  onChange,
  error = false,
}) => {
  return (
    <FormControl fullWidth error={error}>
      <FormLabel>{label}</FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={onChange}
          disableFuture
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
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default Calendar;
