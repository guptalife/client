import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose=() => {
    setAnchorEl(null);
  };


  const [anchorEl,setAnchorEl] = React.useState(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const open= Boolean(anchorEl);
  return (
    <AppBar position="static">
          <Toolbar>
              <Typography
               component={'button'}
               onClick={(e)=>setAnchorEl(e.currentTarget)}
               variant='h2' >Dahsboard</Typography>
               <Menu
                 anchorEl={anchorEl}
                 open={open}
                 onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                     <Typography 
                     >one</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Typography>Two</Typography>
                  </MenuItem>
                </Menu>
          </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
