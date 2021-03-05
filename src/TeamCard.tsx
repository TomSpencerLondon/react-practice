import React from "react";

interface Props {
  name: string
};


const TeamCard = ({ name }: Props) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Turf_Moor_panorama.jpg/1000px-Turf_Moor_panorama.jpg" />
      <p>This is Turf Moor in 2012. Burnley FC founded 1882</p>
    </div>
  );
};

export default TeamCard;
