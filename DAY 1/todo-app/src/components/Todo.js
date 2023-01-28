import React from "react";

const Todo = () => {
  return (
    <section className="-mt-8 mb-12">
      <div className="flex rounded-[.75em] bg-[#fff] h-[44px] w-[530px] max-w-[584px] w-auto mx-auto shadow-none">
        <div className="flex flex-1 basis-1 shrink grow flex-wrap justify-center">
          <div className="flex w-full justify-between">
            <section className="flex flex-row justify-around w-80">
              <span>P</span>
              <span>Code the UI of my project</span>
            </section>
            <section className="w-1/4 flex justify-between">
              <span>Time</span>
              <input type="radio" className="scale-150" />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todo;
