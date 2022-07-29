import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

//import todosReducer from './features/todos/todosSlice'
//import filtersReducer from './features/filters/filtersSlice'

const middleware = [thunk];

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    //todos: todosReducer,
    //filters: filtersReducer
  },
  middleware
})

export default store;