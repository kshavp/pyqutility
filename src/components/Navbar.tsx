import React from "react";
import { Link, useLocation } from "react-router-dom";

const semesters: { sem: string; route: string }[] = [
  {
    sem: "Semester 1",
    route: "sem1",
  },
  {
    sem: "Semester 2",
    route: "sem2",
  },
  {
    sem: "Semester 3",
    route: "sem3",
  },
  {
    sem: "Semester 4",
    route: "sem4",
  },
];

const Navbar: React.FC = () => {
  const routeName = useLocation().pathname.split("/").pop();

  return (
    <nav className="mt-8 rounded-md">
      <ul className="bg-customRed-light grid grid-cols-2 place-items-center md:flex justify-between md:gap-x-8 rounded-md">
        {semesters.map((semester, index) => (
          <li
            className={`p-3 rounded-md bg-customRed-light cursor-pointer ${
              routeName === semester.route ? "bg-customRed-dark text-white" : "bg-customRed-light"
            }`}
            key={index}
          >
            <Link to={semester.route}>{semester.sem}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
