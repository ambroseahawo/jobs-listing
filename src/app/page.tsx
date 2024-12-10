import Filters from "@/components/filters";
import JobList from "@/components/jobList";
import Pagination from "@/components/pagination";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Find your <span className="text-blue-600">new job</span> today
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Filters */}
        <aside className="lg:col-span-3">
          <Filters />
        </aside>
        {/* Job List */}
        <main className="lg:col-span-6 bg-white shadow-md rounded-lg p-4">
          <JobList />
          <Pagination />
        </main>
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
