import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 10 }) => {
  const [hover, setHover] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 min-h-screen">
      <p className="font-semibold">Rate Yourself! Since You are best</p>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {[...Array(noOfStars)].map((_, i) => {
            i += 1;
            return (
              <span key={i} className="inline-block">
                <FaRegStar
                  className={
                    i <= (hover || rating) ? `text-yellow-300` : `text-white`
                  }
                  onMouseMove={() => setHover(i)}
                  onClick={() => setRating(i)}
                  onMouseLeave={() => setHover(rating)}
                  size={30}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StarRating;
