import classNames from "classnames";
import styles from "./styles.module.css";
import { useEffect, useState, useCallback } from "react";
import { ReactComponent as StarIcon } from "./star.svg";

const Rating = ({ isEditable = false, rating, setRating = null }) => {
  const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

  const constructRating = useCallback(
    (currentRating) => {
      const updateArray = ratingArray.map((ratingElement, index) => {
        return (
          <StarIcon
            className={classNames(styles.star, {
              [styles.filled]: index < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(index + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => changeRating(index + 1)}
          />
        );
      });

      setRatingArray(updateArray);
    },
    [rating, isEditable]
  );

  const changeDisplay = (rating) => {
    if (!isEditable) return;
    constructRating(rating);
  };

  const changeRating = (rating) => {
    if (!isEditable || !setRating) return;
    setRating(rating);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating, constructRating]);

  return (
    <div>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
