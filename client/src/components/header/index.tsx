import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import logo from '../../assets/cyber.svg';
import { pages } from '../../main';
import { useNavigate } from 'react-router-dom';
import Drawer from './Drawer';

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: '#191a19' }}>
      </AppBar>
    </Box>
  );
}
