import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">メダカ工房</span>
            <span className="text-2xl font-bold text-yellow-500 ml-1">SAKURA</span>
          </Link>
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              ホーム
            </Link>
            <Link to="/auctions" className="text-gray-700 hover:text-blue-600 font-medium">
              オークション一覧
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
