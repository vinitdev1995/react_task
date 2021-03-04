import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Divider,
  ListItemText,
  Drawer
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./AppLayout.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    color: "#000000",
    background: "#FFFFFF"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>Header</Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className="app-logo">TEST TASK</div>
        <Divider className="divider" />
        <List>
          <ListItem className="nav-link" button>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
