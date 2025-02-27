import { FormLabel } from "@mui/joy";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  options: SelectOption[];
  onChange?: (selectedValue: string | null) => void;
  error?: boolean;
  helperText?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label = "Select an option",
  options,
  onChange,
  error = false,
  helperText = "",
}) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <FormControl fullWidth error={error}>
      <FormLabel sx={{ marginBottom: 1 }}>{label}</FormLabel>
      <Select
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        sx={{
          borderRadius: "8px",
          transition: "border 0.3s ease",
          width: "100%",
        }}
      >
        <MenuItem value="" disabled>
          -
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
