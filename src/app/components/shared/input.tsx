import { FormLabel, Input } from "@mui/joy";
import { FormControl, FormHelperText } from "@mui/material";
import React from "react";

interface InputCustomProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const InputCustom: React.FC<InputCustomProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  required,
  error,
  helperText,
}) => {
  return (
    <div>
      <FormControl error={error} sx={{ width: "100%" }}>
        <FormLabel>{label}</FormLabel>
        <Input
          sx={{ margin: "8px 0 3px 0px" }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          error={error}
        />
        <FormHelperText>{!!error ? helperText : ""}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default InputCustom;
