import React from "react";
import Button from "./Button";

const list = ["All", "Cricket", "Gaming", "Javascript", "Movies", "Comedy"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
