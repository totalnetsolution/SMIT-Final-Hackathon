import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/user-dashboard" className="text-gray-700 hover:text-blue-600">
              User Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard" className="text-gray-700 hover:text-blue-600">
              Admin Dashboard
            </Link>
          </li>
          <li>
            <Link to="/loan-request" className="text-gray-700 hover:text-blue-600">
              Loan Request
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
