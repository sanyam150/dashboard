import React, { useState, useEffect } from 'react';
import { IoIosStar } from 'react-icons/io';

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const [currentRating, setCurrentRating] = useState(rating);

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  return (
    <div>
      {Array.from({ length: maxRating }, (_, index) => (
        <IoIosStar
          key={index}
          style={{
            color: index < currentRating ? '#f8dc2f' : '#d8d8d7',
          }}
        />
      ))}
    </div>
  );
};

export default StarRating;
