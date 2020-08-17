import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(37,37,37)",
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
    width: "100%",
  },
  appBar: {
    backgroundColor: "white",
    color: "black",
  },
  menuButton: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    textTransform: "capitalize",
    fontSize: "1.09rem",
    borderBottom: "1px solid rgba(0,0,0,0)",
    fontWeight: "500",
    lineHeight: "1.6",
    letterSpacing: "0.0075em",
  },
  activeButton: {
    borderRadius: 0,
    textTransform: "capitalize",
    borderBottom: "1px solid #fff",
    marginRight: theme.spacing(2),
    fontSize: "1.09rem",
    fontWeight: "500",
    lineHeight: "1.6",
    letterSpacing: "0.0075em",
  },
  brandContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0, 5),
    },
  },
  brand: {
    flexFlow: 1,
    color: theme.palette.primary.light,
  },
  logo: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default useStyles;
