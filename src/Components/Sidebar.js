import React,{useState, Fragment} from "react"
import {useDispatch} from "react-redux"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import Dialog from "@material-ui/core/Dialog"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MuiDialogActions from "@material-ui/core/DialogActions"
import MuiDialogContent from "@material-ui/core/DialogContent"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import useStyles from "./SidebarStyle"
import { Avatar } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import {bookPost} from "../Public/Redux/Action/book"
import HistoryIcon from '@material-ui/icons/History'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExploreIcon from '@material-ui/icons/Explore';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import decode from "jwt-decode";
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickLogin = () => {
    window.location="/login"
  };
  const handleClickRegister = () => {
    window.location="/register"
  }
  const handleClickExplore = () => {
    window.location="/"
  };
  const handleClickHistory = () => {
    window.location="/History"
  };
  const handleClickWishlist = () => {
    window.location="/wishlist"
  };
//new
const [book,setBooks] = useState({
  title:"",
    imgurl:"",
    author:"",
    status:"",
    genre:"",
    description:""
});

//new
const handleChange = e=> {
  e.persist();
  setBooks({...book, [e.target.name]:e.target.value});
};
//new
const dispatch = useDispatch();
//new
const handleSubmit = e => {
  e.preventDefault();
  const {title,imgurl,author,status,genre,description}=book;
  dispatch(bookPost(title,imgurl,author,status,genre,description));
  window.location.reload();
};
let user_id, isAdmin, user;
  if (token) {
    user = decode(token);
    console.log(`decode`,user);
    user_id = user.response.user_id;
    isAdmin = user.response.isAdmin;
  }
  return (
    <Fragment>
      <div className="modal-addData">
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Add Book
          </DialogTitle>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="title"
            name="title"
            value={book.title}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="imgurl"
            name="imgurl"
            value={book.imgurl}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Status"
            name="status"
            value={book.status}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Author"
            name="author"
            value={book.author}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Genre"
            name="genre"
            value={book.genre}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            name="description"
            value={book.description}
            fullWidth
            onChange={handleChange}
          />
          </DialogContent>
          <DialogActions>
            <Button
              style={{ backgroundColor: "blue", color: "black" }}
              autoFocus
              onClick={handleSubmit}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* new */}
      {/* <div className="modal-Login">
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Login
          </DialogTitle>
          <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="title"
            name="title"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="imgurl"
            name="imgurl"
            fullWidth
            onChange={handleChange}
          />
          
          </DialogContent>
          <DialogActions>
            <Button
              style={{ backgroundColor: "blue", color: "black" }}
              autoFocus
              onClick={handleSubmit}
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div> */}
      {/* end here */}
      <Grid container justify="center" alignItems="center">
        <Avatar src="https://www.logolynx.com/images/logolynx/03/039b004617d1ef43cf1769aae45d6ea2.png" alt="1" className={classes.bigAvatar} />
        <h2 className={classes.h2}>Yudi Prayoga Raharja</h2>
      </Grid>
      <List>
      
        <ListItem button>
          <ListItemText className={classes.listItem} onClick={handleClickExplore}> <ExploreIcon/> Explore </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.listItem} onClick={handleClickWishlist}> <FavoriteIcon/> Wishlist </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText className={classes.listItem} onClick={handleClickHistory} ><HistoryIcon/> History  </ListItemText>
        </ListItem>
        {isAdmin === "admin" ? (<ListItem button>
          <ListItemText
            className={classes.listItem}
            onClick={handleClickOpen}
          > <AddCircleOutlineIcon/> Add Book </ListItemText>
        </ListItem>): (
          ""
        ) }
        {/* {isAdmin === "user" ? ( ):("")} */}
        {token ?  (
          <ListItem button>
          <ListItemText className={classes.listItem} onClick={() => {
              setInterval(() => {
                window.location.href = "/";
                setToken(localStorage.clear());
              }, 800);
            }}> <VpnKeyIcon/> Logout </ListItemText>
        </ListItem>
        ): ( 
          <ListItem button>
          <ListItemText className={classes.listItem} onClick={handleClickLogin}> <VpnKeyIcon/> Login </ListItemText>
        </ListItem>
        
        )}
        {/* {token && isAdmin === "admin" ? (
          <ListItem button>
            <Add className={classes.icon} />
            <ListItemText
              className={classes.listItem}
              primary="Add Book"
              onClick={handleClickOpen}
            />
          </ListItem>
        ) : (
          ""
        )} */}
        
      </List>
    </Fragment>
  );
};

export default Sidebar;
