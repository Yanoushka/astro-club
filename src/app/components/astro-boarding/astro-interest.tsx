import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const interests = [
  { value: "career", label: "Career & Ambitions" },
  { value: "love", label: "Love & Relationships" },
  { value: "health", label: "Health & Wellness" },
  { value: "wealth", label: "Wealth & Abundance" },
  { value: "spiritual", label: "Spiritual Growth" },
];

const AstroInterest = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {

  return (
    <FormControl fullWidth>
      <InputLabel>Area of Interest</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
      >
        {interests.map((interest) => (
          <MenuItem key={interest.value} value={interest.value}>
            {interest.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AstroInterest;
