import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { setScaleVal } from '../../store/slices/weatherSlice';
import { useAppDispatch } from '../../hooks/hooks';

export default function VerticalSlider() {
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }
 const dispatch = useAppDispatch()

  return (
    <Box sx={{ height: 200 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
            position: 'fixed',
            top: '0',
            left: '0',
          },
        }}
        orientation="vertical"
        defaultValue={50}
        aria-label="Temperature"
        valueLabelDisplay="auto"
        onKeyDown={preventHorizontalKeyboardNavigation}
        onChange={(e)=> dispatch(setScaleVal(e.target))}
      />
    </Box>
  );
}
