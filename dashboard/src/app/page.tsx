import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-200 mb-6">
          Welcome to the Dashboard App
        </h1>

        <p className="text-gray-100 mb-8 text-lg">
          Manage your tasks, track analytics and stay organized with our
          powerful dashboard.
        </p>

        <Link
          href="/dashboard"
          className="inline-flex justify-center text-center px-8 py-3 bg-orange-400 text-white rounded-lg shadow-lg font-semibold"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
