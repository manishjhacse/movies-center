import React, { useState } from "react";
import "./style.scss";
function SwitchTabs({ data, onTabChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    const screenWidth = window.innerWidth;
    const leftPosition = screenWidth < 768 ? index * 50 : index * 100;

    setLeft(leftPosition);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectedTab===index?"text-white":"text-black"}`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </span>
          );
        })}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
}

export default SwitchTabs;
