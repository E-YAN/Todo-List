import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { motion } from "framer-motion";
import toast from "react-hot-toast";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");

  const handleChangeTask = (e) => {
    setTodo(e.target.value);
  };
  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
 

  const add = () => {
    if (todo === "") {
      toast.error('Task is Empty');
    } else if (user === "") {
      toast.error('User Name is Empty');
        } else if (date === "") {
      toast.error('Please Add The Date');
    } else {
      
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        //
        //userName: user.charAt(0).toUpperCase() + user.slice(1),

        //
        userName: user.toUpperCase(),
      

        item: todo,
        date:date,
        completed: false,
      });
      setTodo("");
      setUser("");
      setDate("");
      toast.success('Task Added Suaccesssfully');
    }
  };

  // To use the EnterKey to submet and adding the task
  //instead of useing the add button.
    const handleKeypress = (e) => {
      if (e.code === "Enter" || e.code === "NumpadEnter"|| e.code === "13") {
        add();
      }
    };

  
  return (
    <div>
    <div className="addTodos">
      <input
        placeholder="New Task ..."
        type="text"
        onChange={(e) => handleChangeTask(e)}
        onKeyPress={(e) => handleKeypress(e)}
        className="todo-input"
        value={todo}
      />
      
      <input
        placeholder="User Name ..."
        type="text"
        onChange={(e) => handleChangeUser(e)}
        onKeyPress={(e) => handleKeypress(e)}
        className="todo-input"
        value={user}
      />
      
     <div className="deadlineDiv">
     <span
       className="deadlineSpan"
       >Task Deadline :{" "}{" "}
      </span>
      <input
        type="date"
        onChange={(e) => handleChangeDate(e)}
        onKeyPress={(e) => handleKeypress(e)}
        className="deadlineInput"
        value={date}
      /> 
      </div>
      
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        Add Task 
      </motion.button>
      
    </div>
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
