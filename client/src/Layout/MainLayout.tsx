import React from "react";
import TopNav from "../components/navigation/TopNav";
import Home from "../pages/home/home";

function MainLayout() {
  return (
    <div className='w-full'>
      <div className='bg-[#fff] h-12  border-b-1'>
        <TopNav />
      </div>
      <Home />
    </div>
  );
}

export default MainLayout;
