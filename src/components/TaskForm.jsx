import React from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAdd(data.title);
    reset();
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2 mb-4"
    >
      <input
        {...register("title", { required: "Task title cannot be empty" })}
        className={`flex-1 p-2 border rounded ${
          errors.title ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-teal-500`}
        type="text"
        placeholder="Enter a new task"
      />
      <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Add</button>
      {errors.title && (
        <p className="text-red-500 mt-1 text-sm">{errors.title.message}</p>
      )}
    </form>
  );
};

export default TaskForm;
