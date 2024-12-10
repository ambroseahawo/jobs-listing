const Filters = () => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm text-gray-800">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      {/* Location Filters */}
      <div className="mb-4">
        <p className="font-medium text-gray-700 mb-2">Location</p>
        <div>
          <label className="block text-gray-600">
            <input type="radio" name="location" className="mr-2" /> Near me
          </label>
          <label className="block text-gray-600">
            <input type="radio" name="location" className="mr-2" /> Remote job
          </label>
        </div>
      </div>

      {/* Salary Filters */}
      <div className="mb-4">
        <p className="font-medium text-gray-700 mb-2">Salary</p>
        <div>
          <button className="mr-2 px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
            Hourly
          </button>
          <button className="mr-2 px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
            Monthly
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
            Yearly
          </button>
        </div>
      </div>

      {/* Add more filter sections */}
    </div>
  );
};

export default Filters;
