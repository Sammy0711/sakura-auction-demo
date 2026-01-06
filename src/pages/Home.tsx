import { Link } from 'react-router-dom';
import AuctionCard from '../components/AuctionCard';
import { auctions } from '../data/auctions';

export default function Home() {
  const featuredAuctions = auctions.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            最高品質のメダカをあなたに
          </h1>
          <p className="text-xl mb-8">
            厳選されたブリーダーから直接購入
          </p>
          <Link
            to="/auctions"
            className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
          >
            オークションを見る
          </Link>
        </div>
      </section>

      {/* Featured Auctions */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            注目のオークション
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAuctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/auctions"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              すべてのオークションを見る →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
