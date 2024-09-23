import React from "react";

interface IProps {
  semester: string;
}

const SemTile: React.FC<IProps> = ({ semester }) => {
  return (
    <div className="border rounded p-8">
      <p>{semester}</p>
    </div>
  );
};

export default SemTile;
