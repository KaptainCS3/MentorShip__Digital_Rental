import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const TaskFilter = () => {
  return (
    <div>
      <div className="flex justify-evenly">
        <span>
          <FontAwesomeIcon
            icon={faCalendar}
            className="inline-block cursor-pointer text-[#ca8bfe] mr-[5em]"
          />
          <span className="text-small">Today's task</span>
        </span>
      </div>
      <div className="flex justify-end flex-col">
        <div className="w-full">
          <span className="w-3 h-3 rounded-full bg-[#ca8bfe]"></span>
          Personal
        </div>
        <div className="w-full">
          <span className="w-3 h-3 rounded-full bg-[#3fd4f4]"></span>
          Freelance
        </div>
        <div className="w-full">
          <span className="w-3 h-3 rounded-full bg-[#fac608]"></span>
          Work
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
