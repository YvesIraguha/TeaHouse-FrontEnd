import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import logo from "../../assets/images/tea-house-logo.jpg";
import useStyles from "./styles";

const piecesLinks = [
  { title: "STORIES", link: "/short-stories" },
  { title: "POEMS", link: "/poems" },
  { title: "ESSAYS", link: "/essays" },
  { title: "INTERVIEWS", link: "/interviews" },
  { title: "LIT NEWS", link: "/lit-news" },
  { title: "GOSSIP", link: "/gossip" },
];

const AppHeader = () => {
  const location = useLocation();
  const classes = useStyles();
  const [anchorElLinks, setAnchorElLinks] = useState(null);
  const [anchorPiecesLinks, setAnchorPiecesLinks] = useState(null);

  const isActive = (name) => location.pathname?.split("/")[1] === name;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden only={["lg", "md", "xl"]}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-controls="links-menu"
              aria-haspopup="true"
              onClick={(e) => setAnchorElLinks(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="links-menu"
              anchorEl={anchorElLinks}
              keepMounted
              open={Boolean(anchorElLinks)}
              onClose={() => setAnchorElLinks(null)}
            >
              {["Submissions", "Individual pieces", "Issues"].map((item) => (
                <MenuItem key={item} selected={isActive(item)}>
                  <Button
                    color="inherit"
                    component={RouterLink}
                    to={`/${item}`}
                    key={item}
                  >
                    {item}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Hidden>
          <div className={classes.brandContainer}>
            <Avatar alt="logo" src={logo} className={classes.logo} />
          </div>
          <Grid container justify="flex-end" alignItems="center">
            <Grid
              container
              item
              xs={6}
              className={classes.sectionDesktop}
              spacing={3}
            >
              <Grid item>
                <Typography color="inherit" component={RouterLink} to={`/`}>
                  Home
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="inherit"
                  component={RouterLink}
                  to={`directions`}
                >
                  Submissions
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  onClick={(e) => setAnchorPiecesLinks(e.currentTarget)}
                  className={classes.individualPiece}
                >
                  Individual pieces
                </Typography>
                <Menu
                  id="links-menu"
                  anchorEl={anchorPiecesLinks}
                  keepMounted
                  open={Boolean(anchorPiecesLinks)}
                  onClose={() => setAnchorPiecesLinks(null)}
                >
                  {piecesLinks.map(({ title, link }) => (
                    <MenuItem key={title} selected={isActive(title)}>
                      <Button
                        color="inherit"
                        component={RouterLink}
                        to={`${link}`}
                        key={link}
                      >
                        {title}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
              <Grid item>
                <Typography
                  color="inherit"
                  component={RouterLink}
                  to={`issues`}
                >
                  Issues
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
