import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
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
      <FormControl error={error}>
        <FormLabel>{label}</FormLabel>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
        />
        <FormHelperText>{!!error ? helperText : ""}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default InputCustom;
