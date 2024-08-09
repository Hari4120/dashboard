import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton, Button, ListItemIcon, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import './MainLayout.css';

import { Link } from 'react-router-dom';

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
  const iconStyle = {
    marginRight: '-15px',
    marginBottom: '2px',
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        style={{ position: 'absolute', top: 6, left: 10}}
      >
        <NotesRoundedIcon fontSize='large' style={{color: '3b80ff'}}/>
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        classes={{paper: 'sidebar'}}
        PaperProps={{
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(13.5px)'}}}
        ModalProps={{
              BackdropProps: {
                style: { backgroundColor: 'transparent' },
              },
            }}
      >
        <List>
          <ListItem button component={Link} to="/dashboard" onClick={toggleDrawer(false)}>
            <ListItemIcon style={iconStyle}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/userProfile" onClick={toggleDrawer(false)}>
          <ListItemIcon style={iconStyle}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="User Profile" />
          </ListItem>
          <ListItem button component={Link} to="/notifications" onClick={toggleDrawer(false)}>
          <ListItemIcon style={iconStyle}>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button component={Link} to="/billingInvoices" onClick={toggleDrawer(false)}>
          <ListItemIcon style={iconStyle}>
              <ReceiptLongIcon />
            </ListItemIcon>
            <ListItemText primary="Billing & Invoices" />
          </ListItem>
          <ListItem button component={Link} to="/plansAddons" onClick={toggleDrawer(false)}>
          <ListItemIcon style={iconStyle}>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary="Plans & Addons" />
          </ListItem>
        </List>
      </Drawer>
      <Outlet />
    </>
  );
};

export default MainLayout;