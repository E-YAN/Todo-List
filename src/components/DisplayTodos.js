import React, { useState } from "react";
//import { useSRef } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
  removeAllTodos,
  returnIncompleteTodos,
} from "../redux/reducer";
import TodoList from "./TodoList.js";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeAllTodo: () => dispatch(removeAllTodos()),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    returnIncompleteTodo: (id) => dispatch(returnIncompleteTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("incomplete");


  return (
    
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("incomplete")}
        >
          Incomplete
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          Show All Task
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("hideAllTodos")}
        >
          Hide All Task
        </motion.button>
        {props.todos.length > 0 && (
        <motion.button
          id="deleteAll"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("removeAllTodos")}
        >
          Delete All Task
        </motion.button>)}
        

      </div>

      <ul>
        <AnimatePresence>
          {props.todos.length > 0 && sort === "incomplete"
            ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoList
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    removeAllTodo={props.removeAllTodos}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                    returnIncompleteTodo={props.returnIncompleteTodo}
                  />
                )
              );
            })
            : props.todos.length === 0 && sort === "incomplete" ?
              <motion.li
                initial={{
                  y: "50vw",
                  transition: { type: "spring", duration: 200 }
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 2 }
                }}
                whileHover={{
                  scale: 0.9,
                  transition: { type: "spring", duration: 0.1 },
                }}
                exit={{
                  z: "1vw",
                  scale: [1, 0],
                  transition: { duration: 0.5 },
                }}
                className="card"
              >
                <h3>There is No Task<br></br>You Can Add Some Tasks </h3></motion.li> : null}

          {/* for completed items */}
          {sort === "completed" ?
            props.todos.length > 0 ?
              props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoList
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      removeAllTodo={props.removeAllTodos}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                      returnIncompleteTodo={props.returnIncompleteTodo}
                    />
                  )
                );
              })
              : (
              <motion.li
                initial={{
                  y: "50vw",
                  transition: { type: "spring", duration: 200 }
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 2 }
                }}
                whileHover={{
                  scale: 0.9,
                  transition: { type: "spring", duration: 0.1 },
                }}
                exit={{
                  z: "1vw",
                  scale: [1, 0],
                  transition: { duration: 0.5 },
                }}
                className="card">
                <h3>There is No Completed Task </h3>
                </motion.li>): null
                }


          {/* for all items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
              return (
                <TodoList
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  removeAllTodo={props.removeAllTodos}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                  returnIncompleteTodo={props.returnIncompleteTodo}
                />
              );
            })
            : props.todos.length === 0 && sort === "all" ?
              <motion.li
                initial={{
                  y: "50vw",
                  transition: { type: "spring", duration: 200 }
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 2 }
                }}
                whileHover={{
                  scale: 0.9,
                  transition: { type: "spring", duration: 0.1 },
                }}
                exit={{
                  z: "1vw",
                  scale: [1, 0],
                  transition: { duration: 0.5 },
                }}
                className="card"
              >
                <h3> Tasks List is Empty  </h3></motion.li> : null}


          {/* To Delete all items */}
          {/* for all items */}
          {
            
          
            (props.todos.length === 0 ||props.todos.length )> 0 && sort === "removeAllTodos" ?
              <motion.li
                initial={{
                  y: "50vw",
                  transition: { type: "spring", duration: 200 }
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 2 }
                }}
                whileHover={{
                  scale: 0.9,
                  transition: { type: "spring", duration: 0.1 },
                }}
                exit={{
                  z: "1vw",
                  scale: [1, 0],
                  transition: { duration: 0.5 },
                }}
                className="card"
              >
                <h3> All The Task are deleted </h3></motion.li> : null}
          
          
          
          {/*Hide All Tasks*/}
          {props.todos.length > 0 && sort === "hideAllTodos" ?
            <motion.li
            initial={{
              y: "50vw",
              transition: { type: "spring", duration: 200 }
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 2 }
            }}
            whileHover={{
              scale: 0.9,
              transition: { type: "spring", duration: 0.1 },
            }}
            exit={{
              z: "1vw",
              scale: [1, 0],
              transition: { duration: 0.5 },
              backgroundColor: "rgba(255,0,0,1)",
            }}
            className="card"
          >
            <h3> All The Task are Hiden </h3></motion.li> 
            : props.todos.length === 0 && sort === "hideAllTodos" ?
              <motion.li
                initial={{
                  y: "50vw",
                  transition: { type: "spring", duration: 200 }
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 2 }
                }}
                whileHover={{
                  scale: 0.9,
                  transition: { type: "spring", duration: 0.1 },
                }}
                exit={{
                  z: "1vw",
                  scale: [1, 0],
                  transition: { duration: 0.5 },
                }}
                className="card"
              >
                <h3> There is No Task To Hide </h3></motion.li> : null}

        </AnimatePresence>
      </ul>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
