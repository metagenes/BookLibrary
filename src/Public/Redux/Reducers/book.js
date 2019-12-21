const initialState = {
    bookData: [],
    counter: 0,
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const book = (prevState = initialState, action) => {
    switch (action.type) {
      case 'GET_BOOK_PENDING':
        return {
          ...prevState,
          isFulfilled: false,
          isRejected: false,
          isLoading: true,
        };
      case 'GET_BOOK_REJECTED':
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_BOOK_FULFILLED':
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          bookData: action.payload.data.response,
        };
        case 'POST_BOOKPOST_PENDING':
          return {
            ...prevState,
            isFulfilled: false,
            isRejected: false,
            isLoading: true,
          };
        case 'POST_BOOKPOST_REJECTED':
          return {
            ...prevState,
            isLoading: false,
            isRejected: true,
          };
        case 'POST_BOOKPOST_FULFILLED':
          prevState.bookData.push(action.payload.data)
          return {
            isLoading: false,
            isFulfilled: true,
            bookData: prevState.bookData,
          };

        case "UPDATE_BOOK_PENDING":
          return {
            prevState,
            isLoading: true,
            isFulfilled: false,
            isRejected: false
          };
        case "UPDATE_BOOK_REJECTED":
          return {
            prevState,
            isLoading: false,
            isRejected: true
          };
        case "UPDATE_BOOK_FULFILLED":
          return {
            prevState,
            isLoading: false,
            isFulfilled: true,
            bookData: action.payload.data
          };

        case "DELETE_BOOK_PENDING":
          return {
            prevState,
            isLoading: true,
            isRejected: false,
            isFulfilled: false
          };
        case "DELETE_BOOK_REJECTED":
          return {
            prevState,
            isLoading: false,
            isRejected: true
          };
        case "DELETE_BOOK_FULFILLED":
          const dataAfterDelete = prevState.bookData.filter(
            book => book.book_id !== action.payload.data.book_id
          );
          return {
            prevState,
            isLoading: false,
            isFulfilled: true,
            bookData: dataAfterDelete
          };
        
          case "SEARCH_BOOK":
            return {
              bookData: action.payload.data
            };
  
      default:
        return prevState;
    }
  };
  
  export default book;
  