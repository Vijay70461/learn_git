import { Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Blogging Website
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={1} color="error">
            <CircleNotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider color="inherit" />
      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
