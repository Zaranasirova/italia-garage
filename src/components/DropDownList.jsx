import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//Context///
import { MainContext } from "../utils/MainContext";

const DropDownList = ({ triggerText, items,icon,ClassList,ClassLink }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { path} = useContext(MainContext);
  return (
    <div className="dropdown-container">
      <span
        className={`dropdown-trigger ${path === "/" ? "active" : ""}`}
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        {triggerText}{icon}
      </span>
      <ul className={`${ClassList} ${isDropdownVisible ? "visible" : ""}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`listItem ${path === "/" ? "active" : ""}`}
          >
            <Link
              className={`${ClassLink} ${isDropdownVisible ? "linkVisible" : ""}
                    } ${path === "/" ? "active" : ""}`}
              to={item.link}
              target="_blank"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownList;
