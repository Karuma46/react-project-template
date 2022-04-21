import React, { useRef } from "react";

const Sidebar = () => {
  let sidebarRef = useRef();
  const drawSidebar = () => {
    const sidebar = sidebarRef.current;
    [...sidebar.classList].filter((el) => {
      el === "short-sidebar"
        ? sidebar.classList.remove("short-sidebar")
        : sidebar.classList.add("short-sidebar");
      console.log(el);
    });
  };

  return (
    <div
      className="sidebar col-1 p-0"
      id="sidebar"
      onClick={drawSidebar}
      ref={sidebarRef}>
      <span>Sidebar</span>
    </div>
  );
};

export default Sidebar;
