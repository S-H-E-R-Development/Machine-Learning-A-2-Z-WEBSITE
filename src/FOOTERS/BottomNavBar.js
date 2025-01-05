import React from "react";
import './BottomNavBar.css';
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <footer>
      <div className="copyright">
        <h3>
        An Open Source Project:
          <Link to="https://github.com/S-H-E-R-Development/Machine-Learning-A-2-Z-WEBSITE" target="_blank" >
         &nbsp;GitHub React &nbsp;
          </Link>
          <Link to="https://github.com/Machine-Learning-A-2-Z/00---Basics-of-ML" target="_blank">
          GitHub ML
          </Link> 
        </h3>
      </div>
    </footer>
  );
}
