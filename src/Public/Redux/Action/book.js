import Axios from 'axios';

export const getBook = () => {
  return {
    type: 'GET_BOOK',
    payload: Axios.get('http://localhost:8000/book'),
  };
};

export const bookPost = (title,imgurl,author,status,genre,description) => {
  return {
    type: 'POST_BOOK',
    payload: Axios.post ('http://localhost:8000/book',
    {title,
    imgurl,
    author,
    status,
    genre,
    description}),
  };
};
  export const bookUpdate = (book_id,title,imgurl,author,status,genre,description) => {
    return {
      type: 'UPDATE_BOOK',
      payload: Axios.put(`http://localhost:8000/book?id=${book_id}`,
      {title,
      imgurl,
      author,
      status,
      genre,
      description}),
    };
};

export const bookDelete = book_id => {
  return {
    type: 'DELETE_BOOK',
    payload: Axios.delete(`http://localhost:8000/book?id=${book_id}`),
  };
};

export const searchBook = title => {
  return {
    type: "SEARCH_BOOK",
    payload: title
  };
};

