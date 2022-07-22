import * as React from 'react';

// Material UI

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Selectable : React.FC<{ currencies: object, currentCurrency?: string, setCurrentCurrency?: any }> = ({ currencies, currentCurrency, setCurrentCurrency }) => {
  const customizeCurrencies : Array<string> = Object.keys(currencies);

  const handleChange = (event: SelectChangeEvent) => {
    setCurrentCurrency(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Exchange rate</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCurrency}
          label="Exchange rate"
          onChange={handleChange}
        >
          {
            customizeCurrencies?.length > 0 ? (
              customizeCurrencies?.map((currency : any, index : number) => (
                <MenuItem value={currency} key={index}>{currency}</MenuItem>
              ))
            ) : null
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selectable;