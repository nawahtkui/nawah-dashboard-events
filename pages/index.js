import RealTimeFeed from '../components/RealTimeFeed';
import TokenDistribution from '../components/TokenDistribution';
import FeaturedNFTs from '../components/FeaturedNFTs';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nawah Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <TokenDistribution />
          <FeaturedNFTs />
        </div>
        <div>
          <RealTimeFeed />
        </div>
      </div>
    </div>
  );
}
