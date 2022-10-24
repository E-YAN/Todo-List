//import React, { useState } from 'react';
//import {Link} from "react-scroll";
//import { connect } from "react-redux";
import { motion } from "framer-motion";
//import {DisplayTodos} from "./DisplayTodos";
//import React from "react";

const NavBar = () => {
    //const [sort, setSort] = useState("active");
    return (
        <nav className='todoNav'>
            <div>
            <motion.h1
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", duration: 1 }}
                whileHover={{ scale: 1.05 }}
                className={"todoHeader"}
            >
                Todo List
            </motion.h1>
            </div>
            
            <div className="navMenu">
      
            </div>
            
        </nav>
    )
};

export default NavBar;

