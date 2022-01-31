import { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ status = false, onSelect, onClean }) {
  return (
    <FaStar
      color={status ? "red" : "black"}
      onClick={onSelect}
      onDoubleClick={onClean}
    />
  );
}

export function StarString({ totalLength = 5 }) {
  const [rating, setRating] = useState(0);

  // Getting index from array using Map
  // console.log(createArray(totalLength).map((n,i) => i));
  return (
    <>
      <span> Give your Rating: </span>
      {createArray(totalLength).map((_nullCBFunc, starIndex) => (
        <Star
          key={starIndex}
          status={rating > starIndex}
          onSelect={() => setRating(starIndex + 1)}
          onClean={() => {
            setRating(0);
          }}
        />
      ))}
      <br />
      <br />
      <br />
      {rating ? (
        <p>
          You Rated: {rating} out of {totalLength}.
        </p>
      ) : (
        ""
      )}
    </>
  );
}
