import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./buttons.scss";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
// import src from "assets/icons/outlinedArrow.png";

// const ease = [0.43, 0.03, 0, 1.02];

// const style = {
//   color: "#6941F3",
//   fontSize: "2.2rem",
// };

const RectButton = ({ dest, placeholder, varient }) => {
  const [roundArrow, setRoundArrow] = useState(false);
  useEffect(() => {
    if (varient === "secondary") {
      setRoundArrow(true);
    }
  }, [roundArrow, varient]);
  return (
    <NavLink className="btn-link" to={`/${dest}`}>
      <button className={`${varient} btn`}>{placeholder} </button>
      {/* {roundArrow ? <SvgIcon /> : ""} */}
      {roundArrow ? (
        <div className="svg-wrapper">
          {/* <ArrowForwardRoundedIcon style={style} />{" "} */}
          <SvgIcon />
        </div>
      ) : (
        ""
      )}
    </NavLink>
  );
};

const SvgIcon = () => {
  return (
    <svg viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="12.25" stroke="#6941F3" strokeWidth="1.5" />
      <path
        d="M19.5127 13.5127C19.7958 13.2295 19.7958 12.7705 19.5127 12.4873L14.8988 7.87348C14.6157 7.59035 14.1566 7.59035 13.8735 7.87348C13.5903 8.15661 13.5903 8.61565 13.8735 8.89878L17.9747 13L13.8735 17.1012C13.5903 17.3843 13.5903 17.8434 13.8735 18.1265C14.1566 18.4097 14.6157 18.4097 14.8988 18.1265L19.5127 13.5127ZM7 13.725L19 13.725V12.275L7 12.275V13.725Z"
        fill="#6941F3"
      />
    </svg>
  );
};

export default RectButton;
