import {combineReducers} from 'redux';

import book from './book';
import borrow from './borrowBooks';
import user from './user';

const appReducer = combineReducers ({
  book,
  borrow,
  user,
});

export default appReducer;
