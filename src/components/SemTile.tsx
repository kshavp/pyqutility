import React from "react";

interface Subjects {
    subject:string, code:string, ie1:string, ie2:string, ie3:string, finals:string
}

const SemTile: React.FC<Subjects> = ( subjects ) => {
  return (
    <div className="text-center my-6 border rounded-lg shadow-md px-4 py-12 m-2 hover:shadow-lg transition duration-300 bg-gray-800">
      <h3 className="my-6 text-3xl font-semibold text-customRed">
        {subjects.subject}
      </h3>
      <p className="my-6 text-gray-400">{subjects.code}</p>
      <a
        href={subjects.ie1}
        className="bg-customWhite-offWhite p-2 font-bold rounded-xl text-customRed-light hover:text-customRed-dark mr-4"
      >
        IE-1
      </a>
      <a
        href={subjects.ie2}
        className="bg-customWhite-offWhite p-2 font-bold rounded-xl text-customRed-light hover:text-customRed-dark mr-4"
      >
        IE-2
      </a>
      <a
        href={subjects.ie3}
        className="bg-customWhite-offWhite p-2 font-bold rounded-xl text-customRed-light hover:text-customRed-dark mr-4"
      >
        IE-3
      </a>
      <a
        href={subjects.finals}
        className="bg-customWhite-offWhite p-2 font-bold rounded-xl text-customRed-light hover:text-customRed-dark"
      >
        Finals
      </a>
    </div>
  );
};

export default SemTile;
