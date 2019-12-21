import React,{useEffect} from "react"
// import Book from "../Data/Book"
import {useDispatch, useSelector} from "react-redux"
import Swal from "sweetalert2"
import { makeStyles } from "@material-ui/core/styles"
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from "@material-ui/core"
import {bookUpdate,bookDelete} from "../Public/Redux/Action/book"
import {borrowBooks} from "../Public/Redux/Action/borrow"
import decode from "jwt-decode";

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: "100%"
  },
  root: {
    flexGrow: 1
  }
});

//Function Component detail
const Detail = props => {
  
  const index = props.match.params.index;
  const token = localStorage.getItem("token");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const books = useSelector((state)=> state.book.bookData)
  const dispatch = useDispatch();
  const [bookdetail, setBookdetail] = React.useState({
    imgurl:"",
    title:"",
    author:"",
    status:"",
    genre:"",
    description:"",
  })
  useEffect(()=>{
    setBookdetail(books.filter(detbook=>detbook.book_id==index)[0])
  },[]);
//handleChange;
const handleChange = e => {
  e.persist();
  setBookdetail({ ...bookdetail, [e.target.name]: e.target.value });
};
//handle submit
const handleEdit = e => {
  const { book_id } = props.match.params;
  e.preventDefault();
  const { title,imgurl,author,status,genre,description } = bookdetail;
  dispatch(bookUpdate(book_id,title,imgurl,author,status,genre,description));
  setBookdetail(bookdetail);
  setInterval(() => {
    handleClose();
  }, 1000);
};
// new
//handleBorrow
// const book_id = props.match.params.book_id;
const handleBorrow = async () => {
  const book_id = index;
  // const user_id = ;
  // const user_id = bookdetail;
  await dispatch(borrowBooks(book_id, user_id));
};
// endhere
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text:"You wont able to revert this",
      icon :"warning",
      showCancelButton:true,
      confirmButtonColor:"#3085d6",
      cancelButtonColor:"#d33",
      confirmButtonText:"Yes, delete it",
      preConfirm: async () => {
        try {
          await dispatch(bookDelete(index));
        } catch {
          Swal.fire("failed!","the book is failed to delete","error");
        }
      }
    }).then(result => {
      if (result.value){
        Swal.fire("Deleted!","the book has been deleted","success" );
        setInterval(()=> (window.location ="/"),2000);
      } else if (result.dismiss === Swal.DismissReason.cancel) {Swal.fire({
        title:"canceled",
        text:"your process is cancelled",
        type:"error",
        showConfirmButton:false,
        timer:2000
      });
    }
        });
    
  };
  let user_id, isAdmin, user;
  if (token) {
    user = decode(token);
    console.log(`decode`,user);
    user_id = user.response.user_id;
    isAdmin = user.response.isAdmin;
  }
 
  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="edit"
        open={open}
      >
        <DialogTitle id="edit" onClose={handleClose}>
          Edit Data
        </DialogTitle>
        <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              name="title"
              value={bookdetail.title}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Author"
              name="author"
              value={bookdetail.author}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              name="desc"
              value={bookdetail.description}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Genre"
              name="genre"
              value={bookdetail.genre}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Status"
              name="status"
              value={bookdetail.status}
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Image Url"
              name="imgUrl"
              value={bookdetail.imgurl}
              fullWidth
              onChange={handleChange}
              required
            />
          </DialogContent>
        <DialogActions>
          <Button
            style={{ backgroundColor: "blue", color: "black" }}
            autoFocus
            onClick={handleEdit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={bookdetail.title}
          height="400"
          image={bookdetail.imgurl}
          title={bookdetail.title}
        />
        {isAdmin === "admin" ? (<> <Button
          style={{ marginLeft: 1040, top: "-230px" }}
          variant="contained"
          color="default"  onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          style={{ marginLeft: 960, top: "-266px" }}
          variant="contained"
          color="default"
          onClick={handleEdit}
        >
          Edit
        </Button> </> ): ("")}
        
        <CardContent
          style={{
            height: "275px",
            marginLeft: 120
          }}
        >
          <br />
          <Typography gutterBottom variant="h4" component="h1">
            {bookdetail.title}
          </Typography>
          <Typography
            style={{ width: "40%" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {bookdetail.author}
          </Typography>
          <Typography
            style={{ width: "40%" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {bookdetail.description}
          </Typography>
          <Avatar
            src={bookdetail.imgurl}
            style={{
              width: 130,
              height: 150,
              borderRadius: 5,
              marginLeft: 900,
              top: "-310px"
            }}
          />
          <Button
            style={{ marginLeft: 910, top: "-180px" }}
            variant="contained"
            color="primary"
            disabled={bookdetail.status !== "Available"}
            onClick={e => {
              e.preventDefault();
              handleBorrow();
              Swal.fire({
                position: "center",
                type: "success",
                icon: "success",
                title: "Borrow success"
                // showConfirmButton: true
              });
              // setInterval(() => {
              //   window.location.href = "/";
              // }, 1000);
            }}
          >
            Borrow
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Detail;