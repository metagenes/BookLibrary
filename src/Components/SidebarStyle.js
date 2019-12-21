import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  h2: {
    paddingTop: 1,
    fontSize: 17,
    paddingBottom: 22,
    color:"black"
  },
  bigAvatar: {
    marginLeft: 3,
    width: 125,
    height: 125
  },
  menuItem: {
    color: "white",
    borderRadius: 5
  },
  listItem: {
    marginLeft: 25,
    color:"black"
  },
  drawerPaper:{
    backgroundColor:"white"
  }
}));

export default useStyles;
