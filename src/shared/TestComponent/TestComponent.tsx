import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { createTheme, ThemeProvider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCurrentCity } from "../../store/slices/weatherSlice";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "blue",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});

const options = [
  "Moscow",
  "Berlin",
  "Madrid",
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {

const {citysCoord} = useAppSelector(state => state.weather)
const dispatch = useAppDispatch()

const arrOfCitys = Object.keys(citysCoord)


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (city : any) => {
    setAnchorEl(null);
    dispatch(setCurrentCity(city.textContent))
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <IconButton
        sx={{padding : '0'}}
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon sx={{ color : '#fff'}}/>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {arrOfCitys?.map((option) => (
            <MenuItem
            sx={{color : 'text.primary'}}
              key={option}
              selected={option === "Pyxis"}
              onClick={(e)=> handleClose(e.target)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </ThemeProvider>
  );
}
