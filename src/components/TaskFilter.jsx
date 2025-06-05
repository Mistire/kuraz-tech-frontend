import React from 'react'

const TaskFilter = ({ currentFilter, onChange }) => {
  const filters = ["all", "completed", "pending"];
  return (
    <div className='flex gap-2 justify-center my-4'>
      {filters.map((filter) => (
        <button key={filter} onClick={() => onChange(filter)} className={`px-3 py-1 rounded border ${
          currentFilter === filter ? "bg-teal-600 text-white" : "bg-white text-gray-600"
          }`}>
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
      ))}

    </div>
  )
}

export default TaskFilter