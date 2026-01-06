import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

type AuctionType = {
  id: number;
  name: string;
  currentPrice: number;
  image: string;
  endTime: Date;
  bids: number;
};

interface AuctionCardProps {
  auction: AuctionType;
}

export default function AuctionCard({ auction }: AuctionCardProps) {
  return (
    <Link to={`/auction/${auction.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={auction.image}
          alt={auction.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">
            {auction.name}
          </h3>
          <p className="text-red-600 font-bold text-xl mb-2">
            ¥{auction.currentPrice.toLocaleString()}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{auction.bids}件の入札</span>
            <CountdownTimer endTime={auction.endTime} />
          </div>
        </div>
      </div>
    </Link>
  );
}
