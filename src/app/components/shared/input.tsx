import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import React from "react";

interface InputCustomProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputCustom: React.FC<InputCustomProps> = ({
  label,
  placeholder,
  value,
  onChange,
  required,
}) => {
  const [error, setError] = React.useState<string>("");

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (required && !event.target.value) {
      setError(`${label} is Required.`);
    } else {
      setError("");
      if (onChange) {
        onChange(event);
      }
    }
  };

  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        required={required}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default InputCustom;
