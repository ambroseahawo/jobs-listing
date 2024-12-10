const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Email Notifications Section */}
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <h4 className="font-medium text-gray-800 mb-2">Email me for jobs</h4>
        <p className="text-sm text-gray-500 mb-3">Get job notifications directly in your inbox.</p>
        <input
          type="email"
          placeholder="name@mail.com"
          className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>

      {/* Resume Upload Section */}
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <h4 className="font-medium text-gray-800 mb-2">Upload your resume</h4>
        <p className="text-sm text-gray-500">Stand out by showcasing your skills.</p>
        <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Upload Resume
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
