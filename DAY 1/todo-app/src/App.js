import React from "react";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar"
const App = () => {

  return (
    <main className="flex justify-center items-center h-screen app__h">
      <div className="App__container flex p-1.5 bg-[#fff] rounded-[.75em] direction">
        <SideBar />
        <MainContainer />
      </div>
    </main>
  );
};

export default App;
