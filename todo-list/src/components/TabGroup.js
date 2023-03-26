import { useEffect, useState } from "react";

export const TabGroup = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    props.handleTabChange(activeTab);
    // eslint-disable-next-line
  }, [activeTab]);

  return (
    <div>
      {props.tabOptions.map((option, index) => (
        <button
          className={"tab-option" + (activeTab === index ? " active" : "")}
          key={option.name}
          active={activeTab === index ? 1 : 0}
          onClick={() => setActiveTab(index)}
        >
          {option.name} ({option.count})
        </button>
      ))}
    </div>
  );
};
