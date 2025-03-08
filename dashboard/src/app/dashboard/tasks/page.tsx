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
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto bg-gray-600 rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-8">Tasks</h1>

        <section className="space-y-6">
          {tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="flex items-center justify-between p-6 bg-gray-700  mb-6 text-white shadow-md border-l-4 rounded-lg"
              >
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold text-gray-100">
                    {' '}
                    {task.title}
                  </h2>
                  <p className="text-sm text-gray-200">{task.describtion}</p>
                  <p className="text-sm text-gray-200">{task.dueDate}</p>
                </div>

                <section className="space-y-4">
                  <span
                    className={`px-4 py-3 rounded-full ${
                      task.status === 'Completed'
                        ? 'bg-green-200 text-green-800'
                        : task.status === 'Inprogress'
                        ? 'bg-yellow-200 text-yellow-900'
                        : 'bg-red-200 text-red-950'
                    }`}
                  >
                    {task.status}
                  </span>
                </section>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
