import React from "react";

const HeadingComp = ({first,second}) => {
  return (
    <div>
      <h1 className="text-center d-flex justify-content-center align-items-center sign-up-heading">
        {first} {second}
      </h1>
    </div>
  );
};

export default HeadingComp;
