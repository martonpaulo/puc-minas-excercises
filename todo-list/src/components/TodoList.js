import { useEffect, useState } from "react";
import { TabGroup } from "./TabGroup";
import { TodoListItem } from "./TodoListItem";

const defaultListItems = [
  { description: "Renew gym membership", isCompleted: false },
  { description: "Write a blog about new trends", isCompleted: true },
  { description: "Send project file to the client", isCompleted: false },
  { description: "Discuss new project with team", isCompleted: false },
];

const defaultTabOptions = [
  { name: "All", count: 0 },
  { name: "Pending", count: 0 },
  { name: "Completed", count: 0 },
];

export const TodoList = () => {
  const [items, setItems] = useState(defaultListItems);
  const [itemsToShow, setItemsToShow] = useState(items);
  const [tabOptions, setTabOptions] = useState(defaultTabOptions);
  const [activeTab, setActiveTab] = useState(0);
  const [taskValue, setTaskValue] = useState("");

  useEffect(() => {
    const pendingItems = items.filter((i) => !i.isCompleted);
    const completedItems = items.filter((i) => i.isCompleted);

    setTabOptions([
      { ...tabOptions[0], count: items.length },
      { ...tabOptions[1], count: pendingItems.length },
      { ...tabOptions[2], count: completedItems.length },
    ]);

    handleTabChange(activeTab);
  // eslint-disable-next-line
  }, [items]);

  const handleTaskSubmit = (event) => {
    event.preventDefault();

    if (!taskValue.trim()) {
      return;
    }

    const newTask = { description: taskValue, isCompleted: false };
    setItems([...items, newTask]);
    setTaskValue("");
  };

  const handleTaskChange = (event, item) => {
    const updatedItems = items.map((i) => {
      if (i === item) {
        return {
          ...i,
          isCompleted: event.target.checked,
        };
      }

      return i;
    });

    setItems(updatedItems);
  };

  const handleTabChange = (activeTabSelected) => {
    let itemsToDisplay = items;

    if (activeTabSelected === 1) {
      itemsToDisplay = items.filter((i) => !i.isCompleted);
    } else if (activeTabSelected === 2) {
      itemsToDisplay = items.filter((i) => i.isCompleted);
    }

    setItemsToShow(itemsToDisplay);
    setActiveTab(activeTabSelected);
  };

  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div className="todo-list-container">
      <div className="header">
        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            value={taskValue}
            onChange={(event) => setTaskValue(event.target.value)}
          />
          <button disabled={!taskValue.trim()} type="submit">
            +
          </button>
        </form>
      </div>

      <div className="navigation">
        <TabGroup
          handleTabChange={handleTabChange}
          tabOptions={tabOptions}
        />
        <button className="clear-all-button" onClick={handleClearAll}>Clear All</button>
      </div>

      <div className="content">
        <ul>
          {itemsToShow.map((item, index) => (
            <div key={index} className="item-and-button">
              <TodoListItem
                handleTaskChange={handleTaskChange}
                item={item}
              />
              <button className="delete-button" onClick={() => {
                const idx = items.findIndex((e) => e === itemsToShow[index]);
                setItems(items.filter((_, i) => i !== idx));
              }}>
                ×
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
