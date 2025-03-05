import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-800  p-6">
      <div className="max-w-6xl mx-auto bg-gray-600 p-8 rounded-2xl space-y-8 shadow-lg">
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold mb-4 sm:mb-0">Dashboard</h1>
          <p className="text-lg text-gray-400 mt-3">
            Welcome back! Here you can manage your tasks, view analytics and
            make adjustment
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {/* Tasks Card */}
          <Link
            href="dashboard/tasks"
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Tasks</h2>
              <span className="text-3xl">📂</span>
            </div>

            <p className="text-sm mt-2 text-gray-400">
              View, Manage and Organize your daily tasks
            </p>
          </Link>

          {/* Analytics Card */}
          <Link
            href="dashboard/analytics"
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Analytics</h2>
              <span className="text-3xl">📈</span>
            </div>

            <p className="text-sm mt-2 text-gray-400">
              Gain insights into your performance and trends
            </p>
          </Link>

          {/* Settings Card */}
          <Link
            href="dashboard/settings"
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Settings</h2>
              <span className="text-3xl">⚙️</span>
            </div>

            <p className="text-sm mt-2 text-gray-400">
              Customize and tweak your dashboard settings.
            </p>
          </Link>

          {/* Users Card */}
          <Link
            href="dashboard/users"
            className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Users</h2>
              <span className="text-3xl">🐊</span>
            </div>

            <p className="text-sm mt-2 text-gray-400">
              View and manage your user base.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
