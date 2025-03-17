import React from 'react';

const Analytics = () => {
  const metrics = [
    {
      title: 'Total Sales',
      value: '$400,000',
      change: '12%',
      isPostive: true,
    },
    {
      title: 'Active Users',
      value: '1,200',
      change: '-3%',
      isPostive: false,
    },
    {
      title: 'New Sign Up',
      value: '732',
      change: '8%',
      isPostive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto bg-white/50 rounded-lg shadow-xl p-8">
        <h1 className="text-black text-2xl mb-4">Analytics Dashboard</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-white/60 text-black mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex items-center justify-between rounded-lg p-6 border-l-4 ${
                metric.isPostive ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {metric.title}
                </h3>

                <p className="pt-2 text-lg text-slate-700 mt-2">
                  {metric.value}
                </p>
              </div>
              <div className="text-right text-sm mt-2 text-slate-500">
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
