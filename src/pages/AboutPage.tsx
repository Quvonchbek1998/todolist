import React from "react";
import { useNavigate } from "react-router-dom";

export const Aboutpage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>About Page</h1>``
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in illo
        repellat iste nemo exercitationem excepturi animi beatae voluptatibus
        modi!
      </p>
      <button className="btn btn-sucsess" onClick={() => navigate(-1)}>
        Back Todo
      </button>
    </>
  );
};
