import * as React from "react";
// import ThisPhoto from "{source}";

const Photo = ({ source, alternative }) => {
  return (
    <center>
      <img src={{ source }} alt={alternative} width={300}></img>
    </center>
  );
};

export default Photo;
