import React from "react";
import { Link } from "react-router-dom";
function Card({ courses }) {
  return (
    <div className="relative w-80 h-70 rounded-lg bg-zinc-400/90 text-white  overflow-hidden">
      <img src={courses.img} alt={courses.title} className="w-70 h-60 rounded-lg object-cover" />
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex item-center justify-between px-8 py-3 mb-3 bg-orange-200">
        <Link to={`/courses/${courses.id}`} className="transpe text-orange-500 hover:underline text-[18px] font-semibold ">
            {courses.title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
