import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-80 h-60 border-2 border-gray-600 rounded-xl ">
      <div className="flex justify-around">
        <div className="flex items-center justify-center ">
          <p className="font-poke font-normal">{data?.name}</p>
        </div>

        <div className="flex">
          <img src={data?.sprites.front_default}></img>
          <img src={data?.sprites.front_shiny}></img>
        </div>
      </div>
      <div className="flex gap-2">
        {data?.types.map((indice, index) => {
          const color = indice.type.name;
          return (
            <p className={color} key={index}>
              {indice.type.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
