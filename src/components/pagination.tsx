const Pagination = () => {
  return (
    <div className="flex justify-center mt-6">
      <button className="px-3 py-1 border border-gray-300 rounded-l text-gray-700 hover:bg-gray-100">
        Previous
      </button>
      <button className="px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-100">1</button>
      <button className="px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-100">2</button>
      <button className="px-3 py-1 border border-gray-300 rounded-r text-gray-700 hover:bg-gray-100">
        Next
      </button>
    </div>
  );
};

export default Pagination;
