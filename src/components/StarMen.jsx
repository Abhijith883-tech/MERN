
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";

const StarMen = ({ rating = 0 }) => {  // Default rating to 0 if not provided
  const totalStars = 5;

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={
              rating >= starValue
                ? faStar
                : rating >= starValue - 0.5
                  ? faStarHalfStroke
                  : faStarEmpty
            }
            style={{ color: "#FFD700", marginRight: "5px" }}
          />
        );
      })}
    </div>
  );
};

export default StarMen;
