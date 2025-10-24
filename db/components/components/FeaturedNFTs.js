export default function FeaturedNFTs() {
  const sample = [
    { id: 1, title: 'نور الحكمة', creator: 'Artist A' },
    { id: 2, title: 'رمز التراث', creator: 'Artist B' }
  ];
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="font-semibold mb-2">Featured NFTs</h2>
      <div className="grid grid-cols-2 gap-3">
        {sample.map(n => (
          <div key={n.id} className="border rounded p-2">
            <div className="h-28 bg-gray-100 mb-2 flex items-center justify-center">Image</div>
            <div className="text-sm font-medium">{n.title}</div>
            <div className="text-xs text-gray-500">{n.creator}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
