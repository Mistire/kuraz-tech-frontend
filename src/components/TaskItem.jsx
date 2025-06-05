import React from "react";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 border-1 rounded mb-2 shadow-sm select-none transition-colors duration-300 ${
        task.completed
          ? "bg-teal-100 text-teal-800"
          : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          className="w-6 h-6"
          onChange={() => onToggle(task.id)}
        />
        <span
          className={`${
            task.completed ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✖
      </button>
    </li>
  );
};

export default TaskItem;
