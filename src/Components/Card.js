// import React from "react"
// import Book from "../Data/Book"
// import Card from "@material-ui/core/Card"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
// import Grid from "@material-ui/core/Grid"
// import Typography from "@material-ui/core/Typography"
// import { makeStyles } from "@material-ui/core/Styles"
// import { Link } from "react-router-dom"
// // import {connect} from 'react-redux';

// import {Link} from 'react-redux'; //higher order component (HOC)
// import {getBook} from './Public/Redux/Actions/book';
// const useStyles = makeStyles({
//     card: {
//         maxWidth: 300,
//         borderRadius: 5,
//         margin: 20
//     },
//     root: {
//         flexGrow: 1
//     }
// });


// const CardList = () =>{
//     const classes = useStyles();
//     const [spacing] = React.useState(8);
//      const book = useSelector(state => state.book.bookData);

//   useEffect(() => {
//     dispatch(getBooks());
//   }, [dispatch]);

//     return (
//         <Grid container className={classes.root} spacing={10}>
//         <Grid item xs={12}>
//         <Grid container justify="center" spacing={spacing}>
//             {book &&
//             book.length > 0 &&
//             book.map((book, index) => {
//                 return (
//                     <Card className={classes.card}>
//                         <Link to={`Detail/${book.id}`}>
//                             <CardMedia
//                             component="img"
//                             alt={book.title}
//                             height="400"
//                             image={book.imgurl}/>
//                         </Link>
//                     <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                         {book.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         {book.description}
//                     </Typography>
//                     </CardContent>
//                     </Card>
//                 );
//             })}
//             </Grid>
//             </Grid>
//             </Grid>
       
//     )
        
// };

//   export default CardList;
  
// //run
import React, {Component} from 'react';
// import Navbar from './navbar';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
// import { makeStyles } from "@material-ui/core/Styles"
// const useStyles = makeStyles({
//   card: {
//       maxWidth: 300,
//       borderRadius: 5,
//       margin: 20
//   },
//   root: {
//       flexGrow: 1
//   }
// });
class CardList extends Component {
 
  render () {
    // console.log ('profile', this.props.book);
    const {bookData} = this.props.book;
    // const classes = useStyles();
    // const [spacing] = React.useState(8);
    // if (bookData.length > 0) {
      return (
        
        <div>
          {/* {bookData.length > 0 &&
            bookData.map ((item, index) => {
              return ( */}
                {/* // <div key={index}>
                //   <p>{item.title}</p>
                //   <p>{item.status}</p>
                //   <img className="img" src={item.imgurl} alt={item.title} />
                // </div> */}
                <Grid container flexGrow="1" spacing={10}>
                <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                 {bookData.length > 0 &&
                bookData.map ((item, index) => {
                 return (
                            <Card style={{
                              maxWidth: 250,
                              borderRadius: 10,
                              margin: 30
                            }}>
                                <Link to={`Detail/${item.book_id}`}>
                                    <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height="150"
                                    width="90"
                                    image={item.imgurl}/>
                                    
                                </Link>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.author}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.status}
                            </Typography>
                            </CardContent>
                            </Card>
                            )
                          })}
                 
                    </Grid>
                    </Grid>
                    </Grid>
              
        </div>
      );
    {/* } else {
      return <Redirect to="/" />;
    } */}
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
  };
};

export default connect (mapStateToProps) (CardList);