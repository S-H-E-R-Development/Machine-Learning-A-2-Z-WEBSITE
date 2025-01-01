import React from "react";
import './BottomNavBar.css';
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <footer>
      <div className="copyright">
        <h2>
          <Link to="https://github.com/Machine-Learning-A-2-Z/00---Basics-of-ML" target="_blank">
          An Open Source Project: GitHub
          </Link>
        </h2>
      </div>
    </footer>
  );
}
