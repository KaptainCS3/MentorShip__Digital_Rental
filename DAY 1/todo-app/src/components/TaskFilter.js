import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const TaskFilter = () => {
  return (
    <div>
      <div className="flex justify-evenly flex-col">
        <span>
          <FontAwesomeIcon
            icon={faCalendar}
            className="inline-block cursor-pointer text-[#ca8bfe] mr-[5em]"
          />
          <span className="text-small">Today's task</span>
        </span>
        <span>
          <FontAwesomeIcon
            icon={faCalendar}
            className="inline-block cursor-pointer text-[#ca8bfe] mr-[5em]"
          />
          <span className="text-small">Today's task</span>
        </span>
      </div>
    </div>
  );
};

export default TaskFilter;
