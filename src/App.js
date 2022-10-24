import "./App.css";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import { Toaster } from 'react-hot-toast'
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";



function App() {
  return (
    <div className="App">

      <NavBar />

      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
      <Toaster
        position="center"
      />
    </div>
  );
}

//export default (App);
export default connect(NavBar)(App);
