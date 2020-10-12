import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Book from "@material-ui/icons/MenuBookTwoTone";
import Add from "@material-ui/icons/AddCircleOutlineTwoTone";
import Exit from "@material-ui/icons/ExitToAppTwoTone";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/MenuTwoTone";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  logo: {
    marginTop: 5,
    paddingBottom: 5,
  },
});
const AdminDrawer = ({ logout }) => {
  const history = useHistory();
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(!drawerOpen);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Grid container spacing={6} justify="center" className={classes.logo}>
        <Grid item>
          <MenuIcon />
        </Grid>
        <Grid item>
          <p>TEAHOUSE</p>
        </Grid>
      </Grid>
      <Divider />
      <List>
        {[
          { text: "Stories", link: "short-stories" },
          { text: "Poems", link: "poems" },
          { text: "Interviews", link: "interviews" },
          { text: "Lit news", link: "lit-news" },
        ].map(({ text, link }, index) => (
          <ListItem button key={text} onClick={() => history.push(`/${link}`)}>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{ text: "Issues", link: "issues" }].map(({ text, link }, index) => (
          <ListItem button key={text} onClick={() => history.push(`/${link}`)}>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push("/create")}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="New piece" />
        </ListItem>
        <ListItem button onClick={() => history.push("/createCollection")}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="New issue" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={logout}>
          <ListItemIcon>
            <Exit />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {list("left")}
      </Drawer>
    </div>
  );
};

export default AdminDrawer;
