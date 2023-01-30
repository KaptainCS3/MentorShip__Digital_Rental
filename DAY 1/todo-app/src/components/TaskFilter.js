import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faGear,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
const TaskFilter = () => {
  return (
    <div className="w-full mx-9 __display">
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
            icon={faPrint}
            className="inline-block cursor-pointer text-[#ca8bfe] mr-[5em]"
          />
          <span className="text-small">Print today's task</span>
        </span>
        <span>
          <FontAwesomeIcon
            icon={faGear}
            className="inline-block cursor-pointer text-[#ca8bfe] mr-[5em]"
          />
          <span className="text-small">Today's task</span>
        </span>
      </div>
    </div>
  );
};

export default TaskFilter;
