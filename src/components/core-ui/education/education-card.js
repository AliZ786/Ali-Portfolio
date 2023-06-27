import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import eduImgBlack from "../../../assets/svg/education/eduImgBlack.svg";
import eduImgWhite from "../../../assets/svg/education/eduImgWhite.svg";
import { ThemeContext } from "../../../contexts/theme-context";
import "./education.css";

function EducationCard({
  id,
  institution,
  course,
  field,
  startYear,
  endYear,
  address,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    educationCard: {
      backgroundColor: theme.quaternary,
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`education-card ${classes.educationCard}`}>
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? eduImgBlack : eduImgWhite}
            alt=""
          />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>
            {course} - {field}
          </h4>
          <h4 style={{ color: theme.tertiary }}>{institution}</h4>
          <h6 style={{ color: theme.tertiary }}>{address}</h6>
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
