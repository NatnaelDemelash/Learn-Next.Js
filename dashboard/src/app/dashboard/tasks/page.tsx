import React from 'react';

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Finish Project Report',
      describtion: 'Complete the final report for the project and submit it',
      status: 'Inprogress',
      dueDate: '2025-02-18',
    },
    {
      id: 2,
      title: 'Update Website Content',
      describtion: 'Revise the homepage text to reflect recent changes',
      status: 'Pending',
      dueDate: '2025-02-20',
    },
    {
      id: 3,
      title: 'Team Meeting',
      describtion: 'Discuss the project milestone and progress with the team',
      status: 'Completed',
      dueDate: '2025-02-10',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>

        <section className="space-y-6">
          {tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="flex items-center justify-between p-6 bg-gray-100 mb-6 text-gray-800 shadow-md border-l-4 rounded-lg"
              >
                <div className="flex flex-col space-y-3">
                  <h2> {task.title}</h2>
                  <p>{task.describtion}</p>
                  <p>{task.dueDate}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
