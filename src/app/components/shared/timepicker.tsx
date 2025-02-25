import { FormControl, FormLabel } from "@mui/joy";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";
import React from "react";

interface CustomTimePickerProps {
  label: string;
  value?: Dayjs | null;
  onChange?: (newTime: Dayjs | null) => void;
  error?: boolean;
  helperText?: string;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  label ,
  value,
  onChange,
  error = false,
}) => {
  return (
    <FormControl error={error}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormLabel>{label}</FormLabel>
        <TimePicker
          ampm={false}
          value={value}
          onChange={onChange}
          sx={{
            borderRadius: "8px",
            transition: "border 0.3s ease",
            width: "100%",
          }}
          slotProps={{
            textField: {
              inputProps: { readOnly: true },
              error: !!error,
              helperText: error ? "Date is required" : "",
            },
          }}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default CustomTimePicker;
