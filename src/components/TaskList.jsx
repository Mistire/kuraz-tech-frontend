import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks = [], onToggle, onDelete }) => {
  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
