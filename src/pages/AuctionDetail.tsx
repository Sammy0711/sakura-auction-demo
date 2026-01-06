import { useParams, Link } from 'react-router-dom';
import { auctions } from '../data/auctions';
import CountdownTimer from '../components/CountdownTimer';

export default function AuctionDetail() {
  const { id } = useParams<{ id: string }>();
  const auction = auctions.find((a) => a.id === parseInt(id || '0', 10));

  if (!auction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">商品が見つかりません</h1>
          <Link to="/auctions" className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a4f7a] transition-colors inline-block">
            オークション一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section className="container mx-auto px-4 py-12 flex-1">
        <Link to="/auctions" className="text-[#1e3a5f] hover:text-[#d4af37] mb-4 inline-block">
          ← オークション一覧に戻る
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Main Image */}
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src={auction.image}
                alt={auction.name}
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=メダカ';
                }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-[#1e3a5f] mb-4">{auction.name}</h1>
            <div className="mb-6">
              <p className="text-gray-600 mb-2">出品者: {auction.seller}</p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-[#d4af37]">¥{auction.currentPrice.toLocaleString()}</span>
                <span className="text-gray-500">現在価格</span>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2">残り時間</p>
                <p className="text-xl font-semibold text-[#1e3a5f]">
                  <CountdownTimer endTime={auction.endTime} />
                </p>
              </div>
              <button className="bg-[#d4af37] text-[#1e3a5f] px-6 py-4 rounded-lg font-semibold hover:bg-[#e6c759] transition-colors w-full text-lg">
                入札する
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">商品説明</h2>
          <p className="text-gray-700 leading-relaxed">{auction.description}</p>
        </div>

        {/* YouTube Video */}
        {auction.videoId && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">動画</h2>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${auction.videoId}`}
                title={auction.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

