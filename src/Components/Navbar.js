import React from "react"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import { MenuItem,Button,Menu} from "@material-ui/core"
import Search from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import useStyles from "./NavbarStyle"

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickTimes = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTimes = () => {
    setAnchorEl(null);
  };
  return (
    <>
  
    {/* <MenuItem className={classes.menuItem}>
      All Categories <ArrowDropDownIcon /> 
    </MenuItem> */}
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  All Categories <ArrowDropDownIcon />
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Fantasy</MenuItem>
  <MenuItem onClick={handleClose}>Fabel</MenuItem>
  <MenuItem onClick={handleClose}>Horror</MenuItem>
  <MenuItem onClick={handleClose}>Thriller</MenuItem>
</Menu>
    {/* <MenuItem className={classes.menuItem}>
      All Times <ArrowDropDownIcon />
    </MenuItem> */}
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickTimes}>
  All Times <ArrowDropDownIcon />
</Button>
{/* <Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleTimes}
>
  <MenuItem onClick={handleTimes}>2019</MenuItem>
  <MenuItem onClick={handleTimes}>2019</MenuItem>
  <MenuItem onClick={handleTimes}>2019</MenuItem>
  <MenuItem onClick={handleTimes}>2019</MenuItem>
</Menu> */}
    <Typography className={classes.title} variant="h6" noWrap></Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    
    </>
  );
};

export default Navbar;
