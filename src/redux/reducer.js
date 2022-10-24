import { createSlice } from "@reduxjs/toolkit";
//import Todos from "../components/Todos";
const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //removeAllTodos
    removeAllTodos: (state,action) => {
      return state.map((items) => {
        items.filter(true);})
      // return state.filter.map((item) => {
        
      //     return ( item.id !== action.payload)
      //     ;
      //   }
      // );
      
      
      //return Todos=[]
     // return Todos.filter.map((item) => {
       // return state.filter((item) => item.id !== action.payload);
      //return state=[]      
      //return state.filter(() =>(state !== action.payload))
   // })
  },
    
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },

    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
    
    //returnIncompleteTtasks
    returnIncompleteTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: false,
          };
        }
        return todo;
      });
    },
  },
});


export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  removeAllTodos,
  returnIncompleteTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
