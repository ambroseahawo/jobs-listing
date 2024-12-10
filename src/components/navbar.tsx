import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">JobHire</div>
        <ul className="flex items-center space-x-6">
          {/* <li>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Start a search
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Jobs list
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Salary estimate
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
          </li> */}
        </ul>
        <div className="flex space-x-4">
          {/* <Link href="#" className="text-gray-600 hover:text-blue-600">
            Log in
          </Link> */}
          <Link href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Post Job
          </Link>
        </div>
      </div>
    </nav>
  );
}
