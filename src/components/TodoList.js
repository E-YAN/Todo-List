import { motion } from "framer-motion";
import React, { useRef } from "react";
import { BiEditAlt} from "react-icons/bi";
import { GiReturnArrow} from "react-icons/gi";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import moment from 'moment';

const TodoList = (props) => {
  const { item, updateTodo, removeTodo, completeTodo , returnIncompleteTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  let todayDate = moment(new Date()).format("MM/DD/YYYY");


  return (
    <>
    {




    }




    <motion.li
      initial={{ y: "150vw", 
                 transition: { type: "spring", duration: 200 } }}
      animate={{ y: 0, 
                 transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        z: "50vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
      }}
      key={item.id}
      className="card"
    >
      <header className="userNameStyle">
        <h2>{item.userName}</h2>
      </header>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      /> 
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}<BiEditAlt/>{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}

        {item.completed === true && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "#f7e579" }}
            onClick={() => returnIncompleteTodo(item.id)}
          >
           <GiReturnArrow />
          </motion.button>
        )}


        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}<IoClose />
        </motion.button>{" "}
      </div>

      {/*Task Time*/}

      <span
       className="today"
       >Task Date:{todayDate}
      </span>

      {(item.completed === false) &&
      <span
       className="deadline"
       >Deadline:{item.date}
      </span>}
      {item.completed && <span className="completed">Done</span>}
    </motion.li>
    </>
  );
};

export default TodoList;
